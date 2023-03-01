import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixin";
import { StyledButton } from "../Button/Button.styled";


export const Item = styled.li`
  position: relative;
  background-color: ${colors.white};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;
  width: 280px;
  display: flex;
  flex-direction: column;
  ${device.tablet} {
    width: 336px;
  }
  ${device.desktop} {
    width: 288px;
  }
`;
export const ItemCategory = styled.p`
  position: absolute;
  top: 20px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: 0.04em;
  color: ${colors.primaryText};
  background-color: ${colors.markList};
  padding: 6px 20px 7px;
  width: 158px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  backdrop-filter: blur(2px);
  font-family: "Manrope";
`;
export const BtnAdd = styled(StyledButton)`
  padding: 0%;
  position: absolute;
  top: 12px;
  right: 12px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${colors.markList};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  fill: ${colors.white};
  stroke: ${colors.accentOrange};
  stroke-width: 1px;
  stroke-dasharray: 80;
  stroke-linejoin: round;
  &.edit {
    fill: ${colors.accentOrange};
  }
  svg {
    fill: ${(p) => (p.favorite === "favorite" ? "#F59256" : "white")};
    stroke: ${(p) => (p.favorite === "favorite" ? "white" : "#F59256")};
  }
  :hover, 
  :focus {
    background-color: ${colors.accentOrange};
    stroke: ${colors.white};
  }
`;
export const Image = styled.img`
  object-fit: cover;
  ${device.tablet} {
  }
`;
export const Info = styled.div`
  padding: 20px 12px 16px 12px;
  flex-grow: 1;
  ${device.tablet} {
    padding: 20px 20px 12px 20px;
  }
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.35;
  letter-spacing: -0.01em;
  margin: 0 0 20px 0;
`;
export const InfoList = styled.table`
  margin-bottom: 20px;
`;
export const InfoItem = styled.td`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  min-width: ${(p) => (p.name === "name" ? "90px" : "0")};
`;
export const InfoAction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  min-height: 88px;
  justify-content: center;
  ${device.tablet} {
    padding: 0 24px;
  }
  ${device.desktop} {
    padding: 0%;
  }
`;
export const BtnReadMore = styled(StyledButton)`
  font-size: 16px;
  line-height: 1.37;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.accentOrange};
  padding-top: 6px;
  padding-bottom: 6px;
`;
export const BtnRemove = styled(StyledButton)`
  font-size: 16px;
  line-height: 1.37;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.darkOrange};
  border-color: ${colors.darkOrange};
  fill: ${colors.darkOrange};
  padding-top: 6px;
  padding-bottom: 6px;
`;
