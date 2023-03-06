import styled from "styled-components";
import { colors } from "../../utils/colors";
import { transition } from "../../utils/mixin";

export const BarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const NumBar = styled.ul`
  height: 30px;

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const ArrowBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  border-radius: 50%;

  svg {
    stroke: ${colors.darkOrange};
    fill: ${colors.white};

    transition: fill ${transition};

    :hover,
    :focus {
      fill: ${colors.accentOrange};
    }
  }
  :disabled {
    cursor: not-allowed;
    svg {
      stroke: ${colors.accentOrange};
    }
    :hover,
    :focus {
      svg {
        fill: transparent;
      }
    }
  }
`;

export const PrevBtn = styled(ArrowBtn)`
  svg {
    transform: rotate(-90deg);
  }
`;

export const NextBtn = styled(ArrowBtn)`
  svg {
    transform: rotate(90deg);
  }
`;

export const NumBtn = styled.button`
  pointer-events: ${({ active }) => (active ? "none" : "default")};
  cursor: ${({ active }) => (active ? "default" : "pointer")};

  width: 30px;
  height: 30px;
  padding: 5px;

  font-size: 16px;
  line-height: 1.37;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 2px solid ${colors.accentOrange};

  background-color: ${({ active }) =>
    active ? `${colors.accentOrange}` : "transparent"};

  transition: transform ${transition}, border-color ${transition},
    background-color ${transition};

  :hover,
  :focus {
    transform: ${({ active }) => (active ? "scale(1)" : "scale(1.1)")};

    background-color: ${({ active }) =>
      active ? `${colors.accentOrange}` : `${colors.darkOrange}`};

    border: 2px solid
      ${({ active }) => (active ? "transparent" : `${colors.darkOrange}`)};
  }
`;
