import { ListBox, List, BtnAddSticky } from "./NoticesCategoryLIst.styled";
import { SvgMarkup } from "../SvgHandler/SvgHandler";
import { NoticeItem } from "../NoticeItem/NoticeItem";
import { ResultNotFound } from "../ResultNotFound/ResultNotFound";
import { useDispatch } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../redux/auth/auth-operations";
import { ModalFindPet } from "../ModalFindPet/ModalFindPet/ModalFindPet";
import { Modal } from "../Modal/Modal";
import { useState } from "react";

const svgAdd = SvgMarkup(21.3, 21.3, "addTo");

export const NoticesCategoryList = ({
  notices,
  onRemove,
  user,
  isLogined,
  favorites,
  onAddPet
}) => {
  const dispatch = useDispatch();
 const [isModal, setIsModal] = useState(false)
 const [petInfo, setPetInfo] = useState(false)
  // useEffect(() => {
  //   console.log("favorites", favotires);
  // }, [favotires]);



  const handlerFavorite = (e, id, isFavorite) => {
    if (!isLogined) {
    console.log("pls login first");
    }
    if (!favorites.includes(id)) {
      dispatch(addFavorites(id));
    }else if (isFavorite) {
      dispatch(removeFavorites(id));
    }
  };

  const handlerModalInfo = (e) => {
    if(e?.target.id && e?.target.id !== ""){
      setIsModal(!isModal)
      const petPost = notices.find((el) => el._id === e.target.id);
      setPetInfo(petPost);
    }
   };

  return (
    <ListBox>
      <BtnAddSticky onClick={onAddPet}>
        {svgAdd}
        Add pet
      </BtnAddSticky>
      {notices.length > 0 ? (
        <List>
          <NoticeItem
            user={user}
            notices={notices}
            favoritesList={favorites}
            addFavorite={(e, id, isFavorite) =>
              handlerFavorite(e, id, isFavorite)
            }
            onRemove={onRemove}
            onReadMore={handlerModalInfo}

          ></NoticeItem>
        </List>
      ) : (
        <ResultNotFound />
      )}
      {isModal && <Modal onClose={()=>setIsModal(!isModal)}>
                   <div>
                   <ModalFindPet  
                      onClose={()=>setIsModal(!isModal)}
                      favoritesList={favorites} 
                      addFavorite={(e, id, isFavorite) => handlerFavorite(e, id, isFavorite)}
                      petInfo={petInfo}/> 
                   </div>
                  </Modal>}
    </ListBox>
  );
};
