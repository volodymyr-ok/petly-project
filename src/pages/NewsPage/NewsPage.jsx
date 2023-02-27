import React from "react";
import { NewsList } from "../../components/News/NewsList/NewsList";
import { Title } from "../../components/Title/Title";
import { Container } from "../../components/Container/Container";

const NewsPage = () => {
  return (
    <Container>
      <Title>News</Title>
      <NewsList />
    </Container>
  );
};

export default NewsPage;
