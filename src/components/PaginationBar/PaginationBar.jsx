import React from "react";
import { useSearchParams } from "react-router-dom";
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
  const [pageParams, setPageParams] = useSearchParams("");
  const page = pageParams.get("page") || "";

  const handlePageBtn = (e, el) => {
    console.log(e);
    setPageParams(page !== "" ? { page: el } : {});
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
