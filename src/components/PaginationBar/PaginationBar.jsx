import React, { useEffect, useState } from "react";
import { Container } from "../Container/Container";

import {
  NumBar,
  BarWrapper,
  NextBtn,
  NumBtn,
  PrevBtn,
} from "./PaginationBar.styled";
import { TbPaw } from "react-icons/tb";

// noticesLeft, noticesOnPage, perPage, total

const PaginationBar = ({ info: { currentPage, pageCount }, setPage }) => {
  const [isPrevBtnDisabled, setIsPrevBtnDisabled] = useState(false);
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(false);

  useEffect(() => {
    if (currentPage === 1) setIsPrevBtnDisabled(true);
    else setIsPrevBtnDisabled(false);

    if (currentPage === pageCount) setIsNextBtnDisabled(true);
    else setIsNextBtnDisabled(false);
  }, [currentPage, pageCount]);

  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= pageCount; i++) buttons.push(i);
    return buttons;
  };

  const changePage = ({ target }) => {
    setPage(target.textContent);
  };

  const toPrevPage = () => {
    if (currentPage === 1) return;
    setPage(currentPage - 1);
  };
  const toNextPage = () => {
    if (currentPage === pageCount) return;
    setPage(currentPage + 1);
  };

  const turnToActive = (num) => {
    if (currentPage === num) return true;
    return false;
  };

  return (
    pageCount > 1 && (
      <Container>
        <BarWrapper>
          <PrevBtn
            type="button"
            disabled={isPrevBtnDisabled}
            onClick={toPrevPage}
          >
            <TbPaw size={30} />
          </PrevBtn>
          <NumBar>
            {renderButtons().map((el) => (
              <li key={"buttonId" + el}>
                <NumBtn
                  type="button"
                  active={turnToActive(el)}
                  onClick={changePage}
                >
                  {el}
                </NumBtn>
              </li>
            ))}
          </NumBar>
          <NextBtn
            type="button"
            disabled={isNextBtnDisabled}
            onClick={toNextPage}
          >
            <TbPaw size={30} />
          </NextBtn>
        </BarWrapper>
      </Container>
    )
  );
};

export default PaginationBar;
