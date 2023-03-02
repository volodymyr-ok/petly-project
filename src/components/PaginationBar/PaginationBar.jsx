import React from "react";
import { Container } from "../Container/Container";
import { BarWrapper } from "./PaginationBar.styled";

const PaginationBar = () => {
  return (
    <Container>
      <BarWrapper>
        <button>left</button>
        <ul>
          <li>
            <button type="button">1</button>
          </li>
          <li>
            <button type="button">2</button>
          </li>
          <li>
            <button type="button">3</button>
          </li>
        </ul>
        <button>rigth</button>
      </BarWrapper>
    </Container>
  );
};

export default PaginationBar;
