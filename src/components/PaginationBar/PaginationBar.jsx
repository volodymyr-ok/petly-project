import React from "react";
import { Container } from "../Container/Container";
import { Bar, BarWrapper } from "./PaginationBar.styled";

const PaginationBar = ({ info, setPage }) => {
  // currentPage, noticesLeft, noticesOnPage, pageCount, perPage, total

  const handlePageBtn = ({ target }) => {
    setPage(target.textContent);
  };

  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= info.pageCount; i++) {
      buttons.push(i);
    }
    return buttons;
  };

  return (
    <Container>
      <BarWrapper>
        <button>left</button>
        <Bar>
          {renderButtons().map((e) => (
            <li key={e + "buttonId"}>
              <button type="button" onClick={handlePageBtn}>
                {e}
              </button>
            </li>
          ))}
        </Bar>
        <button>right</button>
      </BarWrapper>
    </Container>
  );
};

export default PaginationBar;
