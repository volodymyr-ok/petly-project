import React from "react";
import { Title } from "../../components/Title/Title";
import { Container } from "../../components/Container/Container";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { NoticesCategoryNav } from "../../components/NoticesCategoryNav/NoticesCategoryNav";
import { NoticesCategoryList } from "../../components/NoticesCategoryLIst/NoticesCategoryLIst";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PawsLoader } from "../../components/Loader/PawsLoader/PawsLoader";
import { ResultNotFound } from "../../components/ResultNotFound/ResultNotFound";
import { selectIsAuth, selectUser } from "../../redux/auth/auth-selectors";
import { authorized } from "../../components/NoticesCategoryNav/NoticesCategoryNav";
import { selectFavorites } from "../../redux/auth/auth-selectors";
import { getNotice1, getFavorite1, getMyNorices1, getNoticesBySearch1 } from "./services";
//getNoticeById1

const NoticesPage = () => {

  const isLogined = useSelector(selectIsAuth);
  const user = useSelector(selectUser);

  const favorites = useSelector(selectFavorites);

  const [sortedValue, setSortedValue] = useState("sell");
  const [sortedValue1, setSortedValue1] = useState("sell");
  const [isModal, setIsModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState({data: []})

const notices = data.data

  useEffect(() => {
    setIsLoading(true);
    if(sortedValue === "my ads"){
      getMyNorices1(sortedValue)
      .then((data) => {
       setData(data)
       setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
    }else if(sortedValue === "favorite ads"){
      getFavorite1(sortedValue)
      .then((data) => {
       setData(data)
       setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
    }else{
      getNotice1(sortedValue)
      .then((data) => {
       setData(data)
       setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
    }
    
  }, [sortedValue]);


  const onSubmit = (e) => {
    if(e !== ""){
       getNoticesBySearch1(e) 
        .then((data) => {
        setData(data)
        setIsLoading(false);
       })
       .catch((error) => {
         setError(error);
         setIsLoading(false);
       });;
    }
  };

  const handlerModalAddPet = async (e) => {
    if (!isLogined) {
      console.log("pls login first");
    } else {
      setIsModal(!isModal);
    }
  };

  const onChooseCategory = (e) => {
    const expr = e.target.textContent;
      authorized.map(({text})=>{
        if(text === expr){
          setSortedValue(expr)
          setSortedValue1(expr)
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
              notices={notices}
              favorites = {favorites}
              isLogined={isLogined}
              onRemove={handlerRemove}
              user={user}
              sortedValue={sortedValue1}
            />
          )}
        </div>
      </Container>
    </>
  );
};

export default NoticesPage;
