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
  getNotice1,
  getFavorite1,
  getMyNorices1,
  getNoticesBySearch1,
  removeNotice,
} from "./services";
import { useLocation } from "react-router-dom";
//import { Navigate } from 'react-router-dom';
//getNoticeById1

const NoticesPage = () => {
  const isLogined = useSelector(selectIsAuth);
  const user = useSelector(selectUser);

  const favorites = useSelector(selectFavorites);

  const [sortedValue, setSortedValue] = useState("");
  const [isModalAddPet, setIsModalAddPet] = useState(false);
  const [reload, setReload] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({ data: [] });

  const location = useLocation();

  const notices = data.data;

  useEffect(() => {
    const { pathname } = location;
    const [, , secName] = pathname.split("/");

    const authorizedHrefs = Object.fromEntries(
      authorized.map(({ href }) => [href, true])
    );
    const notAuthorizedHrefs = Object.fromEntries(
      notAuthorized.map(({ href }) => [href, true])
    );

    const sortedValueToUpdate = getSortedValue(
      secName,
      isLogined,
      authorizedHrefs,
      notAuthorizedHrefs
    );

    setSortedValue(sortedValueToUpdate);
  }, [location, isLogined]);

  function getSortedValue(
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
      try {
        let data;

        switch (sortedValue) {
          case "own":
            data = await getMyNorices1(sortedValue);
            break;
          case "favorite-ads":
            data = await getFavorite1(sortedValue);
            break;
          default:
            data = await getNotice1(sortedValue);
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
  }, [sortedValue, reload]);

  const onSubmit = (e) => {
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
    console.log("onChooseCate", e, e.target.data, "UUU", e.target.dataset.id);
    // const expr = e.target.id;
    const expr = e.target.dataset.id;
    authorized.map(({ href }) => {
      if (href === expr) {
        setSortedValue(expr);
      } else {
        return null;
      }
      return null;
    });
  };
  const handlerRemove = (e) => {
    if (e.target.id && e.target.id !== "") {
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
              notices={notices}
              favorites={favorites}
              isLogined={isLogined}
              onRemove={handlerRemove}
              user={user}
              sortedValue={sortedValue}
            />
          )}
        </div>
      </Container>
    </>
  );
};

export default NoticesPage;
