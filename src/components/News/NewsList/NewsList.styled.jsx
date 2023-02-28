import styled from "styled-components";
import { device } from "../../../utils/mixin";
import { SectionTag } from "../../Section/Section.styled";

export const ListNews = styled.ul`
  position: relative;
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
    column-gap: 36px;
  }
`;

export const Section = styled(SectionTag)`
  padding: 40px 0px 100px 0px;

  ${device.tablet} {
    padding: 60px 0 100px 0;
  }

  ${device.desktop} {
    padding: 60px 0 200px 0;
  }
`;
