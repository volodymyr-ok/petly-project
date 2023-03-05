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
  getNoticesByCategory,
  getFavoriteNotices,
  getMyOwnNotices,
  getNotice1, // <== getNoticesByCategory
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

  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("sell");
  const [isModalAddPet, setIsModalAddPet] = useState(false);
  const [reload, setReload] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({ data: [] });

  // const notices = data.data;

  useEffect(() => {
    setIsLoading(true);
    if (category === "my-ads") {
      getMyNorices1(category)
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    } else if (category === "favorite-ads") {
      const params = { page };

      // getFavorite1(category)
      getFavoriteNotices(params)
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    } else {
      const params = { page };
      getNoticesByCategory(category, params)
        // getNotice1(category)
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }
  }, [category, page]);
  // }, [category, reload]);

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
        setCategory(expr);
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
              data={data}
              favorites={favorites}
              isLogined={isLogined}
              onRemove={handlerRemove}
              user={user}
              category={category}
              setPage={setPage}
            />
          )}
        </div>
      </Container>
    </>
  );
};

export default NoticesPage;
