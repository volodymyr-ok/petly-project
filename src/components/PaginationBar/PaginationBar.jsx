import React, { useEffect, useState } from "react";
import { Container } from "../Container/Container";
import { Bar, BarWrapper, NumBtn } from "./PaginationBar.styled";
import { AiOutlineLeftSquare, AiOutlineRightSquare } from "react-icons/ai";

const PaginationBar = ({ info: { currentPage, pageCount }, setPage }) => {
  // currentPage, noticesLeft, noticesOnPage, pageCount, perPage, total
  const [isPrevBtnDisabled, setIsPrevBtnDisabled] = useState(false);
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(false);

  const changePage = ({ target }) => {
    setPage(target.textContent);
  };

  useEffect(() => {
    if (currentPage === 1) setIsPrevBtnDisabled(true);
    else setIsPrevBtnDisabled(false);
    if (currentPage === pageCount) setIsNextBtnDisabled(true);
    else setIsNextBtnDisabled(false);
  }, [currentPage, pageCount]);

  const handlePrevPage = (e) => {
    if (currentPage === 1) return;
    setPage(currentPage - 1);
  };
  const handleNextPage = (e) => {
    if (currentPage === pageCount) return;
    setPage(currentPage + 1);
  };

  const handleActive = (num) => {
    if (currentPage === num) return true;
    return false;
  };

  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= pageCount; i++) {
      buttons.push(i);
    }
    return buttons;
  };

  return (
    <Container>
      <BarWrapper>
        <button
          type="button"
          disabled={isPrevBtnDisabled}
          onClick={handlePrevPage}
        >
          <AiOutlineLeftSquare />
        </button>
        <Bar>
          {renderButtons().map((el) => (
            <li key={"buttonId" + el}>
              <NumBtn
                type="button"
                active={handleActive(el)}
                onClick={changePage}
              >
                {el}
              </NumBtn>
            </li>
          ))}
        </Bar>
        <button
          type="button"
          disabled={isNextBtnDisabled}
          onClick={handleNextPage}
        >
          <AiOutlineRightSquare />
        </button>
      </BarWrapper>
    </Container>
  );
};

export default PaginationBar;
