import React from "react";
import { NewsList } from "../../components/News/NewsList/NewsList";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { Title } from "../../components/Title/Title";
import { Container } from "../../components/Container/Container";

const NewsPage = () => {
  return (
    <Container>
      <Title>News</Title>
      <SearchInput />
      <NewsList />
    </Container>
  );
};

export default NewsPage;
