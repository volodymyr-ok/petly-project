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
          {/* {isLoading ? (<PawsLoader />) 
          : error ? (<ResultNotFound text="No results was found" />)
          : (<NoticesCategoryList />)} */}
        </>
      </Container>
    </>
  );
};

export default NoticesPage;
