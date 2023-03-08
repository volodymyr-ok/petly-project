import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { transition } from "../../../utils/mixin";

export const AddPetBtn = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.accentOrange};
  border-radius: 50%;
  border: 3px solid ${colors.accentOrange};
  cursor: pointer;
  transition: all ${transition};

  svg {
    stroke: ${colors.white};
  }
  &:hover {
    background-color: transparent;
    svg {
      stroke: ${colors.accentOrange};
    }
  }
`;
