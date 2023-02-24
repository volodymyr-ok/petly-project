import styled from "styled-components";
import { device } from "../../../utils/mixin";

export const ListNews = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 32px;
    row-gap: 60px;
  }
  ${device.desktop} {
    column-gap: 34px;
    row-gap: 60px;
  }
`;
