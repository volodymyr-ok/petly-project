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
  onReadMore,
  user,
  isLogined,
  favorites,
  onAddPet,
  sortedValue,
  isOpen
}) => {
  const dispatch = useDispatch();
 // const [isOpen, setIsOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [petInfo, setPetInfo] = useState({});
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

  const handlerFavorite = (e, id, isFavorite) => {
    if (!isLogined) {
   
      // console.log("pls login first");
    }
    if (!favorites.includes(id)) {
      console.log(e)
      dispatch(addFavorites(id));
    } else if (isFavorite) {
      console.log(e)
      dispatch(removeFavorites(id));
    }
  };
  // let petInfo 

  const readMoreModal = (e)=>{
    if(e.target.id && e.target.id!==""){

      setPetInfo(notices.find(el=>el._id===e.target.id))
      setIsModal(!isModal)
    }
 
  }
  console.log(typeof(isOpen))
  console.log(isOpen)
  return (
    <>
      <ListBox>
        <BtnAddSticky type="button" onClick={onAddPet}>
          {svgAdd}
          Add pet
        </BtnAddSticky>
        {notices.length > 0 ? (
          <List>
            <NoticeItem
              user={user}
              notices={notices}
              favotiresList={favorites}
              addFavorite={(e, id, isFavorite) =>
                handlerFavorite(e, id, isFavorite)
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
    
    
      { isOpen && 
        <Modal type="addPet" onClose={onAddPet}>
          <AddNoticeForm onClose={onAddPet} />
        </Modal>
      }
          {isModal && (
        <Modal type="addPet" onClose={()=>setIsModal(!isModal)}>
          <ModalFindPet 
          onClose={()=>setIsModal(!isModal)} 
          petInfo={petInfo}   
          favoritesList={favorites}
          addFavorite={(e, id, isFavorite) =>
            handlerFavorite(e, id, isFavorite)
          }
          />
        </Modal>
      )}
    </>
  );
};
