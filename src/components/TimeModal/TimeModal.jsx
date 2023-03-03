import React, { useRef } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { TimeWrap, TimeList, TimeItem, TimeDay } from "./TimeModal.styled";
import { colors } from "../../utils/colors";

export const TimeModal = ({ workDays, onClick, weekday }) => {
  const modalRef = useRef();

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
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClick();
      }
      return;
    };

    const handleOutsideClick = (event) => {
      const { target } = event;

      if (modalRef?.current && !modalRef?.current.contains(target))
        onClick.call(this);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [modalRef, onClick]);

  return (
    <TimeWrap ref={modalRef}>
      <TimeList>
        {workDays.map(({ isOpen, from, to }, index) => (
          <TimeItem
            key={index}
            style={
              weekday === index
                ? {
                    backgroundColor: `${colors.accentOrange}`,
                    // border: "1px solid",
                    // borderColor: `${colors.accentOrange}`,
                  }
                : { background: "none" }
            }
          >
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
