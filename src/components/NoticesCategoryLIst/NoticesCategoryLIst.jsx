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
import { removeNotice } from "../../pages/NoticesPage/services";
import { ModalConfirm } from "../ModalConfirm/ModalConfirm";
import { PawsLoader } from "../Loader/PawsLoader/PawsLoader";
import { WarningMessage } from "../WarningMessage/WarningMessage";
import { colors } from "../../utils/colors";
const svgAdd = SvgMarkup(21.3, 21.3, "addTo");
// import { ModalAddNotice } from "../../components/ModalAddNotice/ModalAddNotice";
//import { useDispatch, useSelector } from "react-redux";

export const NoticesCategoryList = ({
  data,
  user,
  isLogined,
  favorites,
  onAddPet,
  categoryName,
  isModalAddPet,
  setPage,
  isModalLogined,
}) => {
  const [isModalReadMore, setIsModalReadMore] = useState(false);
  const [petInfo, setPetInfo] = useState({});
  const [petId, setPetId] = useState("");
  const [isModalEditPost, setIsModalEditPost] = useState(false);
  const [modalRemove, setModalRemove] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(error);

  const notices = data.data;
  const dispatch = useDispatch();

  const handlerFavorite = (e, id, owner, isFavorite) => {
    if (!isLogined) onAddPet();
    if (user._id !== owner) {
      if (!favorites.includes(id)) dispatch(addFavorites(id));
      else if (isFavorite) dispatch(removeFavorites(id));
    } else {
      setPetInfo(notices.find((el) => el._id === id));
      setIsModalEditPost(!isModalEditPost);
    }
  };

  const handlerRemove = (e) => {
    if (modalRemove && petId !== "") {
      setModalRemove(!modalRemove);
      setIsLoading(true);
      removeNotice(petId)
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }
    if (e.target.id && e.target.id !== "") {
      setPetId(e.target.id);
      setModalRemove(!modalRemove);
    }
  };

  const readMoreModal = (e) => {
    // Нащо друга умова (&& e.target.id !== ""), якщо перша повертає ідентичне значення...
    // для того щоб бути впевненим, ось наприклад 133 строчка в NoticePage там 2 рази сетилось пусте значення, після чого йшов пошук по пустій сточці і нам видавало мікс категорій
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
            {!isLoading ? (
              <NoticeItem
                user={user}
                notices={notices}
                favoritesList={favorites}
                addFavorite={(e, id, owner, isFavorite) =>
                  handlerFavorite(e, id, owner, isFavorite)
                }
                onRemove={handlerRemove}
                onReadMore={readMoreModal}
                categoryName={categoryName}
              />
            ) : (
              <PawsLoader />
            )}
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
      {modalRemove && (
        <ModalConfirm
          text={"Are you sure you want to remove pet?"}
          onClose={() => setModalRemove(!modalRemove)}
          question={"Are you shure?"}
          actionText={"Remove"}
          action={handlerRemove}
          cancelText={"Cancel"}
        />
      )}
      {isModalLogined && (
        <WarningMessage
          // onRemove={(postId) => onRemove(postId)}
          type="auth"
          id={petInfo}
          // approveFunk={deletePetItem}
          onClose={onAddPet}
          text="You need be authenticated first"
        />
      )}
    </>
  );
};
