import styled from "styled-components";
import { colors } from "../../utils/colors";

export const BarWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Bar = styled.ul`
  height: 30px;

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const PrevBtn = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;

  padding: 0;

  background-color: transparent;
  border-color: transparent;
  border-radius: 50%;

  :disabled {
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

  svg {
    stroke: ${colors.darkOrange};
    transform: rotate(-90deg);
    :hover,
    :focus {
      fill: ${colors.accentOrange};
    }
  }
`;

export const NextBtn = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;

  padding: 0;

  background-color: transparent;
  border-color: transparent;
  border-radius: 50%;

  :disabled {
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

  svg {
    stroke: ${colors.darkOrange};
    transform: rotate(90deg);
    :hover,
    :focus {
      fill: ${colors.accentOrange};
    }
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
