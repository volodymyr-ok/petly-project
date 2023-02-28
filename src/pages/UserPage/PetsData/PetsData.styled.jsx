import styled from "styled-components";
import { device } from "../../../utils/mixin";

export const ContainerPetsDate = styled.div`
  margin-top: 40px;
  ${device.mobile} {
    margin: 40px auto;
    width: 440px;
  }

  ${device.tablet} {
    margin-top: 20px;
    width: 704px;
  }
  ${device.desktop} {
    margin-top: 0;
    width: 821px;
    display: flex;
    flex-direction: column;
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 16px;
`;

export const BoxPet = styled.section`
  margin: 0 32px;
`;

export const BoxTitlePet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  ${device.tablet} {
    margin-right: 32px;
  }
  ${device.desktop} {
    margin-right: 0px;
  }
`;
export const AddTitle = styled.p`
  margin-right: 15px;
  font-weight: 500;
  font-size: 20px;
`;
export const BtnBox = styled.div`
  display: inline-flex;
  align-items: center;
  ${device.tablet} {
  }
  ${device.desktop} {
    display: inline-flex;
  }
`;

export const BoxMessage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const Message = styled.h3`
  display: inline-flex;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  ${device.tablet} {
    font-size: 24px;
  }
  ${device.desktop} {
    padding: 0;
    font-size: 28px;
  }
`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
`;
