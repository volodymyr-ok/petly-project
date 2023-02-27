import React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { TimeWrap } from "./TimeModal.styled";
import { nanoid } from "nanoid";

export const TimeModal = ({ workDays, onClick }) => {
  console.log(workDays);
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

  const timeId = nanoid();

  return (
    <div onClick={handleBackdropClose}>
      <TimeWrap>
        <ul>
          {workDays.map(({ isOpen, from, to }) => (
            <li key={timeId}>
              {!isOpen && <p>Closed</p>}
              {isOpen && (
                <>
                  <span>
                    {from} - {to}
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
      </TimeWrap>
    </div>
  );
};

TimeModal.propTypes = {
  onClick: PropTypes.func.isRequired,
  workDays: PropTypes.array,
};
