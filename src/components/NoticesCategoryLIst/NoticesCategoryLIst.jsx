import { ListBox, List, BtnAddSticky } from "./NoticesCategoryLIst.styled";
import { SvgMarkup } from "../SvgHandler/SvgHandler";
import { NoticeItem } from "../NoticeItem/NoticeItem";
import { ResultNotFound } from "../ResultNotFound/ResultNotFound";
import { useDispatch } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../redux/auth/auth-operations";
import {
  useState,
} from "react";
import { Modal } from "../../components/Modal/Modal";
// import { ModalAddNotice } from "../../components/ModalAddNotice/ModalAddNotice";
import { AddNoticeForm } from "../ModalAddNotice/AddNoticeForm/AddNoticeForm";
import { ModalFindPet } from "../ModalFindPet/ModalFindPet/ModalFindPet";
//import { useDispatch, useSelector } from "react-redux";
const svgAdd = SvgMarkup(21.3, 21.3, "addTo");

export const NoticesCategoryList = ({
  notices,
  onRemove,
  user,
  isLogined,
  favorites,
  onAddPet,
  sortedValue,
  isModalAddPet
}) => {
  const dispatch = useDispatch();
 // const [isOpen, setIsOpen] = useState(false);
  const [isModalReadMore, setIsModalReadMore] = useState(false);
  const [petInfo, setPetInfo] = useState({});
  const [isModalEditPost, setIsModalEditPost] = useState(false);
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
    if (!isLogined) {
       console.log("pls login first");
    }
    if(user._id !== owner){
      if (!favorites.includes(id)) {
        dispatch(addFavorites(id));
      } else if (isFavorite) {
        dispatch(removeFavorites(id));
      }
    }else{
      setIsModalEditPost(!isModalEditPost)
    }
 
  };
  // let petInfo 

  const readMoreModal = (e)=>{
    if(e.target.id && e.target.id!==""){
      setPetInfo(notices.find(el=>el._id===e.target.id))
      setIsModalReadMore(!isModalReadMore)
    }
 
  }

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
      </ListBox>
    
    
      { isModalAddPet && 
        <Modal type="addPet" onClose={onAddPet}>
          <AddNoticeForm onClose={onAddPet} />
        </Modal>
      }  
          {isModalReadMore && (
        <Modal type="addPet" onClose={()=>setIsModalReadMore(!isModalReadMore)}>
          <ModalFindPet 
          onClose={()=>setIsModalReadMore(!isModalReadMore)} 
          petInfo={petInfo}   
          favoritesList={favorites}
          addFavorite={(e, id, owner, isFavorite) =>
            handlerFavorite(e, id, owner, isFavorite)
          }
          />
        </Modal>
      )}
      {
        isModalEditPost && <Modal onClose={()=>setIsModalEditPost(!isModalEditPost)} ></Modal>
      }
    </>
  );
};
