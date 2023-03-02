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

const NoticesPage = () => {
  const dispatch = useDispatch();
  const isLogined = useSelector(selectIsAuth);
  const user = useSelector(selectUser);
  const notices = useSelector(selectNotice);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [sortedValue, setSortedValue] = useState("sell");

  useEffect(() => {
    dispatch(getNotice(sortedValue));
  }, [dispatch, sortedValue]);

  const onSubmit = (e) => {
    dispatch(getNoticesBySearch(e));
  };

  const onChooseCategory = (e) => {
    const expr = e.target.textContent;
    authorized.map((el) => {
      if (el === expr) {
        setSortedValue(expr);
      } else {
        return null;
      }
      return null;
    });
  };
  const handlerRemove = (e) => {
    // console.log(e.target.id)
    // user.notices
  };

  const handlerModalInfo = (e) => {
    const petPost = notices.find((el) => el.id === e.target.id);
    console.log(petPost);
  };
  return (
    <>
      <Container>
        <Title>Find your favorite pet</Title>
        <SearchInput onSubmit={onSubmit} />
        <NoticesCategoryNav
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
              notices={notices}
              isLogined={isLogined}
              onRemove={handlerRemove}
              onReadMore={handlerModalInfo}
              user={user}
            />
          )}
        </div>
      </Container>
    </>
  );
};

export default NoticesPage;
