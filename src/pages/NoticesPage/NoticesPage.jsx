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
  getNotice1, // <== getNoticesByCategory
  getFavorite1,
  getMyNorices1,
  getNoticesBySearch1,
  removeNotice,
} from "./services";
import { useLocation } from "react-router-dom";
//import { Navigate } from 'react-router-dom';
//getNoticeById1

const NoticesPage = () => {
  const [page, setPage] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const [isModalAddPet, setIsModalAddPet] = useState(false);
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({ data: [] });
  // const [sortedValue, setSortedValue] = useState("");

  const location = useLocation();
  const isLogined = useSelector(selectIsAuth);
  const user = useSelector(selectUser);
  const favorites = useSelector(selectFavorites);
  // const notices = data.data;

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
    setCategoryName(newCategoryName);
  }, [location, isLogined]);

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

    const fetchData = async () => {
      const params = { page };

      try {
        let data;

        switch (categoryName) {
          case "own":
            data = await getMyNorices1(categoryName); // sortedValue
            break;
          case "favorite-ads":
            data = await getFavoriteNotices(params);
            break;
          default:
            data = await getNoticesByCategory(categoryName, params);
            break;
        }

        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [categoryName, page]); // [sortedValue, reload]);

  const onSubmit = (e) => {
    // const params = { page };

    if (e !== "") {
      setIsLoading(true);
      getNoticesBySearch1(e)
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }
  };

  const handlerModalAddPet = (e) => {
    if (!isLogined) {
      console.log("pls login first");
    } else {
      setIsModalAddPet(!isModalAddPet);
    }
  };

  const onChooseCategory = (e) => {
    const expr = e.target.id;
    authorized.map(({ href }) => {
      if (href === expr) {
        setCategoryName(expr);
      } else {
        return null;
      }
      return null;
    });
  };

  const handlerRemove = (e) => {
    if (e.target.id && e.target.id !== "") {
      console.log("file: NoticesPage.jsx:151 ~ e.target.id >>", e.target.id);
      console.log(
        "file: NoticesPage.jsx:152 ~ e.target.id !== '' >>",
        e.target.id !== ""
      );
      setIsLoading(true);

      removeNotice(e.target.id)
        .then(() => {
          setReload(!reload);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }
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
              onAddPet={handlerModalAddPet}
              data={data}
              favorites={favorites}
              isLogined={isLogined}
              onRemove={handlerRemove}
              user={user}
              category={categoryName}
              setPage={setPage}
            />
          )}
        </div>
      </Container>
    </>
  );
};

export default NoticesPage;
