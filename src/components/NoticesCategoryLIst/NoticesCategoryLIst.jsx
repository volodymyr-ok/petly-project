import { ListBox, List, BtnAddSticky } from "./NoticesCategoryLIst.styled";
import { SvgMarkup } from "../SvgHandler/SvgHandler";
import { NoticeItem } from "../NoticeItem/NoticeItem";
import { ResultNotFound } from "../ResultNotFound/ResultNotFound";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../redux/auth/auth-operations";
import { selectFavorites } from "../../redux/auth/auth-selectors";
import {
  // useEffect,
  useState,
} from "react";
import { Modal } from "../../components/Modal/Modal";
// import { ModalAddNotice } from "../../components/ModalAddNotice/ModalAddNotice";
import { AddNoticeForm } from "../ModalAddNotice/AddNoticeForm/AddNoticeForm";
//import { useDispatch, useSelector } from "react-redux";
const svgAdd = SvgMarkup(21.3, 21.3, "addTo");

export const NoticesCategoryList = ({
  notices,
  onRemove,
  onReadMore,
  user,
  isLogined,
  favorites,
}) => {
  const dispatch = useDispatch();
  const favotires = useSelector(selectFavorites);
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   console.log("favorites", favotires);
  // }, [favotires]);

  const handlerModalAddPet = (e) => {
    console.log("click");
    if (!isLogined) {
      // console.log("pls login first");
    }
    setIsOpen(!isOpen);
  };

  const handlerFavorite = (e, id, isFavorite) => {
    if (!isLogined) {
      // console.log("pls login first");
    }
    if (!favorites.includes(id)) {
      dispatch(addFavorites(id));
    } else if (isFavorite) {
      dispatch(removeFavorites(id));
    }
  };

  return (
    <>
      <ListBox>
        <button type="button" onClick={handlerModalAddPet}>
          Add pet
        </button>
        <BtnAddSticky type="button" onClick={handlerModalAddPet}>
          {svgAdd}
          Add pet
        </BtnAddSticky>
        {notices.length > 0 ? (
          <List>
            <NoticeItem
              user={user}
              notices={notices}
              favotiresList={favotires}
              addFavorite={(e, id, isFavorite) =>
                handlerFavorite(e, id, isFavorite)
              }
              onRemove={onRemove}
              onReadMore={onReadMore}
            ></NoticeItem>
          </List>
        ) : (
          <ResultNotFound />
        )}
      </ListBox>

      {isOpen && (
        <Modal type="addPet" onClose={handlerModalAddPet}>
          <AddNoticeForm onClose={handlerModalAddPet} />
          {/* <ModalAddNotice onClose={handlerModalAddPet} /> */}
        </Modal>
      )}
    </>
  );
};
