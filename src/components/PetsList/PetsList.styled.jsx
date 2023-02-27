import styled from "styled-components";

export const WrapperPicDiv = styled.img`
  margin-bottom: 20px;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  background-color: #e1e1e1;
  @media (min-width: 768px) {
    margin-right: 32px;
    margin-bottom: 0;
    width: 161px;
    height: 161px;
  }
`;

export const Description = styled.div`
  position: relative;
  @media (min-width: 768px) {
    width: 471px;
  }
  @media (min-width: 1280px) {
    width: 580px;
  }
`;
export const Box = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  padding: 20px;
  border-radius: 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  background-color: #ffffff;
  @media (min-width: 768px) {
    display: flex;
    width: 704px;
  }
  @media (min-width: 1280px) {
    width: 821px;
    margin-bottom: 22px;
  }
`;

export const InfoPet = styled.p`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: 14px;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const Date = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: calc(22 / 16);
  color: rgba(17, 17, 17, 0.6);
`;

export const Link = styled.a`
  position: relative;
  font-size: 16px;
  line-height: calc(22 / 16);
  color: #f59256;
  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    background-color: #f59256;
    transition: width 300ms linear;
  }
  :hover::after {
    width: 100%;
    transition: 250ms cubic-bezier(0.57, 0.21, 0.69, 1.25);
  }
`;
