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
import {
  getNotice1,
  getFavorite1,
  getMyNorices1,
  getNoticesBySearch1,
  removeNotice,
} from "./services";
//getNoticeById1

const NoticesPage = () => {
  const isLogined = useSelector(selectIsAuth);
  const user = useSelector(selectUser);

  const favorites = useSelector(selectFavorites);

  const [sortedValue, setSortedValue] = useState("sell");
  const [isModalAddPet, setIsModalAddPet] = useState(false);
  const [reload, setReload] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({ data: [] });

  const notices = data.data;

  useEffect(() => {
    setIsLoading(true);
    if (sortedValue === "my-ads") {
      getMyNorices1(sortedValue)
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    } else if (sortedValue === "favorite-ads") {
      getFavorite1(sortedValue)
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    } else {
      getNotice1(sortedValue)
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }
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
    // console.log(e.target)
    const expr = e.target.id;
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
      console.log("ja tut");
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
