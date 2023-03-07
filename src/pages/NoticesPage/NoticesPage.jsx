import React, { Suspense } from "react";
import { Title } from "../../components/Title/Title";
import { Container } from "../../components/Container/Container";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { NoticesCategoryNav } from "../../components/NoticesCategoryNav/NoticesCategoryNav";
import { useState } from "react";
import { useSelector } from "react-redux";
import { PawsLoader } from "../../components/Loader/PawsLoader/PawsLoader";
import { selectIsAuth } from "../../redux/auth/auth-selectors";
import { Outlet } from "react-router-dom";
import { WarningMessage } from "../../components/WarningMessage/WarningMessage";
import { Modal } from "../../components/Modal/Modal";
import { AddNoticeForm } from "../../components/ModalAddNotice/AddNoticeForm/AddNoticeForm";
// import { selectIsNoticesLoading } from "../../redux/notice/notice-selectors";
import { useNoticesParams } from "../../hooks/useMyContext";
import PaginationBar from "../../components/PaginationBar/PaginationBar";
import {
  selectIsNoticesLoading,
  selectPagesInfo,
} from "../../redux/notice/notice-selectors";

const NoticesPage = () => {
  const [isModalAddPet, setIsModalAddPet] = useState(false);
  const [isModalLogined, setIsModalLogined] = useState(false);
  const isLogined = useSelector(selectIsAuth);
  const pagesInfo = useSelector(selectPagesInfo);
  const isLoading = useSelector(selectIsNoticesLoading);
  const { search, setSearch, setPage } = useNoticesParams();

  // useEffect(() => {
  //   const searchParams = { search, page };
  //   if (needToResetPage) setPage(1);
  //   if (search !== "") {
  //     // setIsLoading(true);
  //     getNoticesBySearch(searchParams)
  //       .then((data) => {
  //         setData(data);
  //         // setIsLoading(false);
  //       })
  //       .catch((error) => {
  //         setError(error);
  //         // setIsLoading(false);
  //       });
  //     return;
  //   }
  //   const fetchData = async () => {
  //     try {
  //       let data;
  //       if (categoryName !== "") {
  //         switch (categoryName) {
  //           case "own":
  //             // setIsLoading(true);
  //             data = await getMyOwnNotices({ page });
  //             break;
  //           case "favorite-ads":
  //             // setIsLoading(true);
  //             data = await getFavoriteNotices({ page });
  //             break;
  //           default:
  //             // setIsLoading(true);
  //             data = await getNoticesByCategory(categoryName, { page });
  //             break;
  //         }
  //       }
  //       if (data) {
  //         setData(data);
  //         // setIsLoading(false);
  //       }
  //     } catch (error) {
  //       setError(error);
  //       // setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [categoryName, page, search]);

  const onSubmit = (query) => {
    if (query !== search) setSearch(query);
  };

  const handlerModalAddPet = () => {
    if (!isLogined) setIsModalLogined(!isModalLogined);
    else setIsModalAddPet(!isModalAddPet);
  };

  return (
    <>
      <Container>
        <Title>Find your favorite pet</Title>
        <SearchInput onSubmit={onSubmit} />
        <NoticesCategoryNav
          onAddPet={handlerModalAddPet}
          isLogined={isLogined}
        />

        <>
          <Suspense fallback={<PawsLoader />}>
            <Outlet />
          </Suspense>
          {!isLoading && <PaginationBar setPage={setPage} info={pagesInfo} />}
          {isModalAddPet && (
            <Modal type="addPet" onClose={() => setIsModalAddPet(false)}>
              <AddNoticeForm onClose={() => setIsModalAddPet(false)} />
            </Modal>
          )}
          {isModalLogined && (
            <WarningMessage
              type="auth"
              onClose={() => setIsModalLogined(false)}
              text="You need be authenticated first"
            />
          )}
          {/* {isLoading ? (
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
          )} */}
        </>
      </Container>
    </>
  );
};

export default NoticesPage;
