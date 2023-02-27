import styled from "styled-components";

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
  @media (min-width: 768px) {
    margin-right: 32px;
  }
  @media (min-width: 1280px) {
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
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    display: inline-flex;
  }
`;

export const BoxMessage = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 45px;
  padding-right: 45px;
`;

export const Message = styled.h3`
  padding-top: 10px;
  display: inline-flex;
  font-weight: 500;
  font-size: 20px;
  @media (min-width: 768px) {
    padding-top: 50px;
    font-size: 24px;
  }
`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
`;
