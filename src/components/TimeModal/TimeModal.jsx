import React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { TimeWrap, TimeList, TimeItem, TimeDay } from "./TimeModal.styled";

export const TimeModal = ({ workDays, onClick }) => {
  const day = (index) => {
    switch (index) {
      case 0:
        return "MN";
      case 1:
        return "TU";
      case 2:
        return "WE";
      case 3:
        return "TH";
      case 4:
        return "FR";
      case 5:
        return "SA";
      case 6:
        return "SU";
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  });

  function handleBackdropClose(event) {
    if (event.currentTarget === event.target) {
      onClick();
    }
  }

  function handleEscapeKey(event) {
    if (event.key === "Escape") {
      onClick();
    }
    return;
  }

  return (
    <TimeWrap>
      <TimeList>
        {workDays.map(({ isOpen, from, to }, index) => (
          <TimeItem key={index} onClick={handleBackdropClose}>
            {!isOpen && (
              <>
                <TimeDay>{day(index)}</TimeDay>
                <p>Closed</p>
              </>
            )}
            {isOpen && (
              <>
                <TimeDay>{day(index)}</TimeDay>
                <span>
                  {from} - {to}
                </span>
              </>
            )}
          </TimeItem>
        ))}
      </TimeList>
    </TimeWrap>
  );
};

TimeModal.propTypes = {
  onClick: PropTypes.func,
  workDays: PropTypes.array,
};
