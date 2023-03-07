import { ListBox, List, BtnAddSticky } from "./NoticesCategoryLIst.styled";
import { SvgMarkup } from "../SvgHandler/SvgHandler";
import { NoticeItem } from "../NoticeItem/NoticeItem";
import { ResultNotFound } from "../ResultNotFound/ResultNotFound";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../redux/auth/auth-operations";
import { useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";
import { AddNoticeForm } from "../ModalAddNotice/AddNoticeForm/AddNoticeForm";
import { ModalFindPet } from "../ModalFindPet/ModalFindPet/ModalFindPet";
import PaginationBar from "../PaginationBar/PaginationBar";
import { removeNotice } from "../../pages/NoticesPage/services";
import { ModalConfirm } from "../ModalConfirm/ModalConfirm";
import { PawsLoader } from "../Loader/PawsLoader/PawsLoader";
import { WarningMessage } from "../WarningMessage/WarningMessage";
import {
  selectNotice,
  selectIsLoading,
} from "../../redux/notice/notice-selectors";
import { getMyOwnNotices } from "../../pages/NoticesPage/services";
import { filterData } from "./utils";

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
  const [notices, setNotices] = useState(data.data);

  const addedPet = useSelector(selectNotice);
  const isUploading = useSelector(selectIsLoading);

  useEffect(() => {
    if (isUploading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [isUploading]);

  const dispatch = useDispatch();

  useEffect(()=>{
    if(addedPet?._id && notices!==undefined){
     const include = notices.find(el=>el._id === addedPet?._id)
      if(include && categoryName === "own"){
        setIsLoading(true)
        const result = notices.filter(
          el => el._id !== include._id)
          setNotices([addedPet, ...result])
          setIsLoading(false)
      }else if(!include && addedPet && addedPet!==undefined && categoryName === "own"){
        setIsLoading(true)
         setNotices([addedPet,...notices])
         setIsLoading(false)
      }
    } else if (notices === undefined && addedPet?._id) {
      setNotices([addedPet]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addedPet]);

  const handlerFavorite = (e, id, owner, isFavorite) => {
    if (!isLogined) onAddPet();
    if (isLogined) {
      if (user._id !== owner) {
        if (!favorites.includes(id)) dispatch(addFavorites(id));
        else if (isFavorite) dispatch(removeFavorites(id));
      } else {
        setPetInfo(notices.find((el) => el._id === id));
        setIsModalEditPost(!isModalEditPost);
      }
    }
  };

  const page = 1;

  const handlerRemove = (e) => {
    const fetchData = async () => {
      if (modalRemove && petId !== "") {
        setModalRemove(!modalRemove);
        const result = filterData(notices, petId);
        setIsLoading(true);
        if (result.length <= 1) {
          try {
            const data = await getMyOwnNotices({ page });
            await removeNotice(petId);
            const result = filterData(data.data, petId);
            setNotices(result);
            setIsLoading(false);
          } catch (error) {
            setError(error);
            setIsLoading(false);
          }
        } else {
          removeNotice(petId)
            .then(() => {
              setNotices(result);
              setIsLoading(false);
            })
            .catch((error) => {
              setError(error);
              setIsLoading(false);
            });
        }
      }
    };
    if (e.target.id && e.target.id !== "") {
      setPetId(e.target.id);
      setModalRemove(!modalRemove);
    }
    fetchData();
  };

  const readMoreModal = (e) => {
    // Нащо друга умова (&& e.target.id !== ""), якщо перша повертає ідентичне значення...
    // для того щоб бути впевненим, ось наприклад 133 строчка в NoticePage там 2 рази сетилось пусте значення, після чого йшов пошук по пустій сточці і нам видавало мікс категорій
    if (e.target.id && e.target.id !== "") {
      setPetInfo(notices.find((el) => el._id === e.target.id));
      setIsModalReadMore(!isModalReadMore);
    }
  };

  //console.log(!isModalReadMore&& isModalLogined && "da")
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
          onClose={() => {
            setIsModalReadMore(!isModalReadMore);
          }}
        >
          <ModalFindPet
            isLogined={isLogined}
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
      {error && <div>{error}</div>}
    </>
  );
};
