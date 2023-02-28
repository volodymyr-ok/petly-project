import React from "react";
import { Title } from "../../components/Title/Title";
import { Container } from "../../components/Container/Container";
// import { SearchInput } from "../../components/SearchInput/SearchInput";
import { NoticesCategoryNav } from "../../components/NoticesCategoryNav/NoticesCategoryNav";
import { NoticesCategoryList } from "../../components/NoticesCategoryLIst/NoticesCategoryLIst";

const NoticesPage = () => {
  return (
    <>
      <Container>
        <Title>Find your favorite pet</Title>
        {/* <SearchInput /> */}
        <NoticesCategoryNav />
        <NoticesCategoryList />
      </Container>
    </>
  );
};

export default NoticesPage;
