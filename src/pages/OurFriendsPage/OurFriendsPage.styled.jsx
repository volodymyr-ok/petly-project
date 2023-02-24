import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixin";

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
  }
`;
