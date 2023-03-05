import styled from "styled-components";
import { colors } from "../../utils/colors";

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
  cursor: pointer;

  width: 30px;
  height: 30px;

  padding: 5px;
  border: 1px solid
    ${({ active }) =>
      active ? `${colors.darkOrange}` : `${colors.accentOrange}`};
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? `${colors.accentOrange}` : "transparent"};

  :hover,
  :focus {
    background-color: ${({ active }) =>
      active ? `${colors.darkOrange}` : "transparent"};

    border: 2px solid
      ${({ active }) =>
        active ? `${colors.darkOrange}` : `${colors.darkOrange}`};
  }
`;
