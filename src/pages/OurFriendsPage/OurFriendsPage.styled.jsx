import styled from "styled-components";
import { device } from "../../utils/mixin";

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-bottom: 100px;

  margin-bottom: 100px;
  ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
  }

  &:last-child {
    justify-content: flex-start;
  }
`;
