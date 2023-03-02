import React from "react";
import { Container } from "../Container/Container";
import { Bar, BarWrapper } from "./PaginationBar.styled";

const PaginationBar = ({ info }) => {
  //   console.log(
  //     currentPage,
  //     noticesLeft,
  //     noticesOnPage,
  //     pageCount,
  //     perPage,
  //     total
  //   );

  const renderButtons = () => {
    const buttons = [];

    for (let i = 1; i <= info.pageCount; i++) {
      buttons.push(i);
    }
    return buttons;
  };

  console.log("renderButtons", renderButtons());

  return (
    <Container>
      <BarWrapper>
        <button>left</button>
        <Bar>
          {renderButtons().map((e) => (
            <li>
              <button type="button">{e}</button>
            </li>
          ))}
        </Bar>
        <button>rigth</button>
      </BarWrapper>
    </Container>
  );
};

export default PaginationBar;
