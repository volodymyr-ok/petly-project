import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixin";

export const FriendsItem = styled.li`
  display: flex;
  flex-direction: column;

  padding: 12px 5px;
  width: 280px;
  height: 208px;

  background: ${colors.white};
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;

  ${device.tablet} {
    padding: 16px 5px;
    width: 336px;
    min-height: 272px;

    border-radius: 40px;
    font-size: 14px;
  }

  ${device.desktop} {
    width: 394px;
    height: 310px;

    font-size: 16px;
  }
`;

export const FriendsTitle = styled.a`
  text-align: center;

  margin-bottom: 12px;
  min-height: 16px;

  color: ${colors.accentOrange};
  text-decoration-line: underline;

  font-weight: 700;

  ${device.tablet} {
    height: 42px;

    font-size: 16px;
  }

  ${device.desktop} {
    height: 52px;

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
  position: relative;
  max-width: 148px;

  color: ${colors.black};

  text-decoration: none;
  cursor: pointer;

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

export const Descr = styled.p`
  width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${device.tablet} {
    width: 176px;
  }

  ${device.desktop} {
  }

  &:hover,
  &:focus {
  }
`;
