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
import {
  authorized,
  notAuthorized,
} from "../../components/NoticesCategoryNav/NoticesCategoryNav";
import { selectFavorites } from "../../redux/auth/auth-selectors";
import {
  getNoticesByCategory,
  getFavoriteNotices,
  getMyOwnNotices,
  getNoticesBySearch,
//  removeNotice,
} from "./services";
import { useLocation } from "react-router-dom";
import usePrevious from "../../hooks/usePrevious";
import { selectIsLoading } from "../../redux/notice/notice-selectors";
//import { Navigate } from 'react-router-dom';

const NoticesPage = () => {

  const [page, setPage] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const [isModalAddPet, setIsModalAddPet] = useState(false);
  const [isModalLogined, setIsModalLogined] = useState(false);
 // const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  //const [modalRemove, setModalRemove] = useState(false);

  const location = useLocation();

  const user = useSelector(selectUser);
  const favorites = useSelector(selectFavorites);
  const isLogined = useSelector(selectIsAuth);

  const prevSearch = usePrevious(search);
  const prevCategoryName = usePrevious(categoryName);
  const needToResetPage =
    (prevSearch !== search && page > 1) ||
    (prevCategoryName !== categoryName && page > 1);

  useEffect(() => {
    const { pathname } = location;
    const [, , secName] = pathname.split("/");

    const authorizedHrefs = Object.fromEntries(
      authorized.map(({ href }) => [href, true])
    );
    const notAuthorizedHrefs = Object.fromEntries(
      notAuthorized.map(({ href }) => [href, true])
    );

    const newCategoryName = getCategoryName(
      secName,
      isLogined,
      authorizedHrefs,
      notAuthorizedHrefs
    );
   if(newCategoryName !== categoryName){
    setCategoryName(newCategoryName);
   }
  }, [location, isLogined, categoryName]);

  function getCategoryName(
    secName,
    isAuthenticated,
    authorizedHrefs,
    notAuthorizedHrefs
  ) {
    const hrefs = isAuthenticated ? authorizedHrefs : notAuthorizedHrefs;
    return hrefs[secName] ? secName : "sell";
  }

  useEffect(() => {
      setIsLoading(true);
      const searchParams = { search, page };
      if (needToResetPage) setPage(1);
  
      if (search !== "") {
        getNoticesBySearch(searchParams)
          .then((data) => {
            setData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setError(error);
            setIsLoading(false);
          });
  
        return;
      }
  
      const fetchData = async () => {
        try {
          let data;
          switch (categoryName) {
            case "own":
              data = await getMyOwnNotices({ page }); // sortedValue
              break;
            case "favorite-ads":
              data = await getFavoriteNotices({ page });
              break;
            case "sell" || "in-good-hands" || "lost-found":
                data = await getNoticesByCategory(categoryName, { page });
                break;
            default:
              return
          }
          if(data){
            setData(data);
            setIsLoading(false);
          }
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };
  
      fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName, page, search]);


console.log(selectIsLoading)


  const onSubmit = (query) =>{
    if(query!==""){
      setSearch(query)
    }
  };

  const handlerModalAddPet = () => {
    if (!isLogined) {
      setIsModalLogined(!isModalLogined)
    } else {
      setIsModalAddPet(!isModalAddPet);
    }
  };

  const onChooseCategory = (e) => {
    const expr = e.target.dataset.id;
    authorized.map(({ href }) => {
      if (href === expr) {
        setCategoryName(expr);
      } else {
        return null;
      }
      return null;
    });
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
            <ResultNotFound text="Result not found" />
          ) : (
            <NoticesCategoryList
              isModalAddPet={isModalAddPet}
              isModalLogined={isModalLogined}
              onAddPet={handlerModalAddPet}
              data={data}
              favorites={favorites}
              isLogined={isLogined}
              user={user}
              categoryName={categoryName}
              setPage={setPage}
            />
          )}
        </div>
      </Container>
    </>
  );
};

export default NoticesPage;
