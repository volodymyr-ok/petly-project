import React from "react";
import { Title } from "../../components/Title/Title";
import { Container } from "../../components/Container/Container";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { NoticesCategoryNav } from "../../components/NoticesCategoryNav/NoticesCategoryNav";
import { NoticesCategoryList } from "../../components/NoticesCategoryLIst/NoticesCategoryLIst";
import {
  selectError,
  selectIsLoading,
  selectNotice,
} from "../../redux/notice/notice-selectors";
import {
  getNotice,
  getNoticesBySearch,
} from "../../redux/notice/notice-operations";
//import { getNoticeById} from "../../redux/notice/notice-operations";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PawsLoader } from "../../components/Loader/PawsLoader/PawsLoader";
import { ResultNotFound } from "../../components/ResultNotFound/ResultNotFound";
import { selectIsAuth, selectUser } from "../../redux/auth/auth-selectors";
import { authorized } from "../../components/NoticesCategoryNav/NoticesCategoryNav";
import { selectFavorites } from "../../redux/auth/auth-selectors";
import { Modal } from "../../components/Modal/Modal";
import { AddsPetForm } from "../../components/AddsPetForm/AddsPetForm";

const NoticesPage = () => {
  const dispatch = useDispatch();
  const isLogined = useSelector(selectIsAuth);
  const user = useSelector(selectUser);
  const notices = useSelector(selectNotice);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const favorites = useSelector(selectFavorites);
  const [sortedValue, setSortedValue] = useState("sell");
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if(sortedValue !== "my ads" && sortedValue !== "favorite ads" ){
      dispatch(getNotice(sortedValue));
    }else{
      dispatch(getNotice(""))
    }
  }, [dispatch, sortedValue]);


  const onSubmit = (e) => {
    if(e !== ""){
       dispatch(getNoticesBySearch(e));
    }

  };

  const handlerModalAddPet = (e) => {
    if (!isLogined) {
     console.log("pls login first");
    }else{
      setIsModal(!isModal)
    }
  };

  const onChooseCategory = (e) => {
    const expr = e.target.textContent;
      authorized.map(el=>{
        if(el === expr){
          setSortedValue(expr)
        }else{
          return null
        }
        return null
      })
  }
  const handlerRemove=(e)=>{
    // console.log(e.target.id)
    // user.notices
  };
  const letGetPets = () =>{
    const newSortedArray = []
      if(!isLogined){
        return notices
      }else if(isLogined && sortedValue !== "my ads" && sortedValue !== "favorite ads" ){
        return notices
      }else if(isLogined &&  sortedValue === "favorite ads" ){
        notices.map(el=>{
        return favorites.find(e=>{if(e===el._id){return newSortedArray.push(el)}return null})})
        return newSortedArray
      }else if(isLogined && sortedValue === "my ads" ){
        notices.map(el=>{
         if(el.owner===el._id) return newSortedArray.push(el)
         return null })
        return newSortedArray
      }
      return []
  }

  return (
    <>
      <Container>
        <Title>Find your favorite pet</Title>
        <SearchInput onSubmit={onSubmit} />
        <NoticesCategoryNav
          onAddPet={handlerModalAddPet}
          isLogined={isLogined}
          onChooseCategory={onChooseCategory}
        />
        <div>
          {isLoading ? (
            <PawsLoader />
          ) : error ? (
            <ResultNotFound />
          ) : (
            <NoticesCategoryList
              onAddPet={handlerModalAddPet}
              notices={letGetPets()}
              favorites = {favorites}
              isLogined={isLogined}
              onRemove={handlerRemove}
              user={user}
            />
          )}
        </div>
        {isModal && <Modal onClose={()=>{setIsModal(!isModal)}}>
          <AddsPetForm onClose={()=>{setIsModal(!isModal)}}/>
          </Modal>}
      </Container>
    </>
  );
};

export default NoticesPage;
