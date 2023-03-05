import { ListBox, List, BtnAddSticky } from "./NoticesCategoryLIst.styled";
import { SvgMarkup } from "../SvgHandler/SvgHandler";
import { NoticeItem } from "../NoticeItem/NoticeItem";
import { ResultNotFound } from "../ResultNotFound/ResultNotFound";
import { useDispatch } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../redux/auth/auth-operations";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { AddNoticeForm } from "../ModalAddNotice/AddNoticeForm/AddNoticeForm";
import { ModalFindPet } from "../ModalFindPet/ModalFindPet/ModalFindPet";
import PaginationBar from "../PaginationBar/PaginationBar";
const svgAdd = SvgMarkup(21.3, 21.3, "addTo");
// import { ModalAddNotice } from "../../components/ModalAddNotice/ModalAddNotice";
//import { useDispatch, useSelector } from "react-redux";

export const NoticesCategoryList = ({
  data,
  onRemove,
  user,
  isLogined,
  favorites,
  onAddPet,
  sortedValue,
  isModalAddPet,
  setPage,
}) => {
  const [isModalReadMore, setIsModalReadMore] = useState(false);
  const [petInfo, setPetInfo] = useState({});
  const [isModalEditPost, setIsModalEditPost] = useState(false);

  const notices = data.data;
  const dispatch = useDispatch();
  // const [isOpen, setIsOpen] = useState(false);
  // useEffect(() => {
  //   console.log("favorites", favotires);
  // }, [favotires]);
  // const handlerModalAddPet = (e) => {
  //   console.log("click");
  //   if (!isLogined) {
  //     // console.log("pls login first");
  //   }
  //   setIsOpen(!isOpen);
  // };

  const handlerFavorite = (e, id, owner, isFavorite) => {
    if (!isLogined) console.log("pls login first");

    if (user._id !== owner) {
      if (!favorites.includes(id)) dispatch(addFavorites(id));
      else if (isFavorite) dispatch(removeFavorites(id));
    } else {
      setPetInfo(notices.find((el) => el._id === id));

      setIsModalEditPost(!isModalEditPost);
    }
  };

  const readMoreModal = (e) => {
    // Нащо друга умова (&& e.target.id !== ""), якщо перша повертає ідентичне значення...
    if (e.target.id && e.target.id !== "") {
      setPetInfo(notices.find((el) => el._id === e.target.id));
      setIsModalReadMore(!isModalReadMore);
    }
  };

  return (
    <>
      <ListBox>
        <BtnAddSticky type="button" onClick={onAddPet}>
          {svgAdd}
          Add pet
        </BtnAddSticky>
        {notices?.length > 0 ? (
          <List>
            <NoticeItem
              user={user}
              notices={notices}
              favoritesList={favorites}
              addFavorite={(e, id, owner, isFavorite) =>
                handlerFavorite(e, id, owner, isFavorite)
              }
              onRemove={onRemove}
              onReadMore={readMoreModal}
              sortedValue={sortedValue}
            ></NoticeItem>
          </List>
        ) : (
          <ResultNotFound />
        )}
        <PaginationBar info={data} setPage={setPage} />
      </ListBox>

      {isModalAddPet && (
        <Modal type="addPet" onClose={onAddPet}>
          <AddNoticeForm onClose={onAddPet} />
        </Modal>
      )}
      {isModalReadMore && (
        <Modal
          // type="addPet"
          onClose={() => setIsModalReadMore(!isModalReadMore)}
        >
          <ModalFindPet
            user={user}
            onClose={() => setIsModalReadMore(!isModalReadMore)}
            petInfo={petInfo}
            favoritesList={favorites}
            addFavorite={(e, id, owner, isFavorite) =>
              handlerFavorite(e, id, owner, isFavorite)
            }
          />
        </Modal>
      )}
      {isModalEditPost && (
        <Modal onClose={() => setIsModalEditPost(!isModalEditPost)}>
          <AddNoticeForm
            petInfo={petInfo}
            onClose={() => setIsModalEditPost(!isModalEditPost)}
          />
        </Modal>
      )}
    </>
  );
};
