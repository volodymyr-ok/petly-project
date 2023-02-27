import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixin";

export const FriendsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 280px;
  min-height: 192px;
  background: ${colors.white};
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  padding: 12px 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  ${device.tablet} {
    width: 336px;
    min-height: 246px;
    border-radius: 40px;
    padding: 16px 5px;
    font-size: 14px;
  }

  ${device.desktop} {
    width: 394px;
    min-height: 287px;
    font-size: 16px;
  }
`;

export const FriendsTitle = styled.a`
  font-weight: 700;
  text-decoration-line: underline;
  text-align: center;
  min-height: 16px;
  margin-bottom: 12px;
  color: ${colors.accentOrange};

  ${device.tablet} {
    min-height: 22px;
    font-size: 16px;
  }

  ${device.desktop} {
    min-height: 27px;
    font-size: 20px;
  }

  &:hover,
  &:focus {
    color: ${colors.darkOrange};
  }
`;

export const DescrWrap = styled.div`
  display: flex;
  gap: 12px;
  ${device.tablet} {
    gap: 14px;
  }

  ${device.desktop} {
    gap: 16px;
  }
`;

export const FriendsLogo = styled.img`
  display: block;
  width: 110px;
  height: 78px;
  ${device.tablet} {
    width: 120px;
    height: 85px;
  }

  ${device.desktop} {
    width: 158px;
    height: 112px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  ${device.tablet} {
    gap: 8px;
  }

  ${device.desktop} {
    gap: 12px;
  }
`;

export const InfoWrap = styled.a`
  text-decoration: none;
  color: ${colors.black};
  max-width: 148px;
  ${device.tablet} {
    max-width: 181px;
  }

  ${device.desktop} {
    max-width: 199px;
  }

  &:hover,
  &:focus {
    color: ${colors.accentOrange};
  }
`;

export const InfoDescr = styled.p`
  ${device.tablet} {
  }

  ${device.desktop} {
  }
`;
