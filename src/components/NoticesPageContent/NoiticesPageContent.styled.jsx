import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device, transition } from "../../utils/mixin";
import { StyledButton } from "../Button/Button.styled";

export const Card = styled.li`
  position: relative;
  background-color: ${colors.white};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0 0 30px 30px;
  width: 280px;
  min-height: 606px;
  display: flex;
  flex-direction: column;
  ${device.tablet} {
    width: 336px;
  }
  ${device.desktop} {
    width: 288px;
  }
`;

export const CardLabel = styled.p`
  position: absolute;
  top: 20px;
  text-align: center;
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
`;

export const ToggleBtn = styled.button`
  cursor: pointer;

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
  transition-duration: 250ms;
  svg {
    fill: ${(p) =>
      p.favorite === "favorite" ? `${colors.accentOrange}` : `${colors.white}`};
    stroke: ${(p) =>
      p.favorite === "favorite" ? `${colors.white}` : `${colors.accentOrange}`};
    fill: ${(p) => p.edit === "edit" && `transparent`};
    stroke: ${(p) => p.edit === "edit" && `${colors.accentOrange}`};
    transition-duration: 250ms;
  }
  :hover {
    background-color: ${colors.accentOrange};
    stroke: ${colors.white};
  }
  :hover svg {
    transform: ${(p) => p.favorite === "favorite" && `scale(1.1)`};
    stroke: ${(p) => p.edit === "edit" && `${colors.white}`};
    transform: ${(p) => p.edit === "edit" && `scale(1.2)`};
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

export const InfoWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.35;
  letter-spacing: -0.01em;
  margin: 0 0 20px 0;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 240px;

  ${device.tablet} {
    width: 316px;
  }
  ${device.desktop} {
    width: 248px;
  }
  gap: 10px;

  overflow: hidden;
`;

export const InfoItem = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  min-width: ${(p) => (p.name === "name" ? "90px" : "0")};

  /* width: 100%; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
    padding: 0;
  }
`;
export const BtnReadMore = styled.button`
  cursor: pointer;
  transition: color ${transition}, background-color ${transition};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 28px;
  font-family: "Manrope";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  color: ${colors.primaryText};
  border: 2px solid ${colors.accentOrange};
  border-radius: 40px;
  background-color: ${colors.white};
  text-decoration: none;

  :hover,
  :focus {
    color: ${colors.white};
    background-color: ${colors.accentOrange};
  }
`;

export const BtnRemove = styled(StyledButton)`
  font-size: 16px;
  line-height: 1.37;
  align-items: center;
  color: ${colors.accentOrange};
  padding-top: 6px;
  padding-bottom: 6px;
  color: ${colors.darkOrange};
  border-color: ${colors.darkOrange};
  fill: ${colors.darkOrange};
  gap: 5px;
`;
