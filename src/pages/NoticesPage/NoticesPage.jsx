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
  // getNotice1,
  // getFavorite1,
  // getMyNorices1,
  // getNoticesBySearch1,
  removeNotice,
} from "./services";
import { useLocation } from "react-router-dom";
import usePrevious from "../../hooks/usePrevious";
//import { Navigate } from 'react-router-dom';

const NoticesPage = () => {
  const [page, setPage] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const [isModalAddPet, setIsModalAddPet] = useState(false);
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");

  const location = useLocation();
  const isLogined = useSelector(selectIsAuth);
  const user = useSelector(selectUser);
  const favorites = useSelector(selectFavorites);

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
          default:
            data = await getNoticesByCategory(categoryName, { page });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName, page, search]); // [sortedValue, reload]);

  const onSubmit = (query) => {
    setSearch(query);
    // const params = { page };

    // if (e !== "") {
    //   setIsLoading(true);
    //   getNoticesBySearch(search)
    //     .then((data) => {
    //       setData(data);
    //       setIsLoading(false);
    //     })
    //     .catch((error) => {
    //       setError(error);
    //       setIsLoading(false);
    //     });
    // }
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
