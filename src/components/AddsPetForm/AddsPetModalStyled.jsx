import styled from "styled-components";
import { Form, Field } from "formik";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixin";


// can remove
// export const Overlay = styled.div`
//   overflow-y: scroll;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   padding: 99px auto;
//   justify-content: center;
//   align-items: center;
//   background: rgba(17, 17, 17, 0.6);
//   z-index: 1200;
// `;

// can remove

export const ModalItem = styled.div`
  /* position: relative; */
  display: block;
  padding: 40px 20px;
  width: 100%;
  /* height: 530px; */
  background:${colors.white};
  border-radius: 40px;
  ${device.tablet} {
    padding: 40px 80px;
    width: 608px;
    /* height: 570px; */
  }
`;

export const ModalItemTwo = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  /* width: 280px; */
  /* height: 670px; */
  background: ${colors.white};
  /* box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11); */
  border-radius: 40px;
  ${device.tablet} {
    padding: 40px auto;
    /* width: 608px;
    height: 661px; */
  }
`;

export const TitleItemTwo = styled.h4`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.37;
  text-align: center;
  margin-bottom: 20px;
  color: ${colors.primaryText};
  ${device.tablet} {
    font-size: 20px;
    line-height: 1.35;
    letter-spacing: -0.01em;
  }
`;

export const TitleTwo = styled.h3`
  margin-bottom: 20px;
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.37;
  color: ${colors.primaryText};
  ${device.tablet} {
    font-size: 36px;
    line-height: 1.36;
  }
`;

// export const ButtonCloseModal = styled.button`
//   position: absolute;
//   cursor: pointer;
//   top: 20px;
//   right: 20px;
//   width: 34px;
//   height: 34px;
//   display: flex;
//   transition: color 300ms linear, background-color 300ms linear;
//   // fill: rgba(17, 17, 17, 0.6);
//   svg {
//     fill: ${colors.inputSecText};
//     &:hover {
//       fill: ${colors.blurOrange};
//       // stroke: rgba(245, 146, 86, 1);
//     }
//   }

//   svg {
//     fill:${colors.black};
//   }
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   border: none;

//   background:  ${colors.hzModalPet};
//   border-radius: 50%;
//   ${device.tablet} {
//     /* width: 44px;
//     height: 44px; */
//     top: 25px;
//     right: 25px;
//   }
// `;

export const Title = styled.h3`
  margin-bottom: 28px;
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.37;
  color:  ${colors.primaryText};
  ${device.tablet} {
    font-size: 36px;
    line-height: 1.36;
  }
`;

export const FormStyled = styled(Form)`
  display: block;
`;

export const FieldStyled = styled(Field)`
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.35;
  cursor: pointer;
  width: 100%;
  /* width: 240px; */
  height: 40px;
  color:  ${colors.inputPriText};
  margin-top: 8px;
  padding: 11px 14px;
  background:  ${colors.hzModalPet};
  border: 1px solid ${colors.accentOrange};
  border-radius: 40px;
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.35;
    color: ${colors.inputSecText};
    ${device.tablet} {
      font-size: 16px;
      line-height: 1.62;
    }
  }
  ${device.tablet} {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    padding: 16px 10px;
    /* width: 448px; */
    height: 48px;
    margin-top: 12px;
  }
`;

export const FieldPhoto = styled(Field)`
  display: none;
  cursor: pointer;
`;

export const AddFile = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  /* width: 208px;
  height: 208px; */
  background: ${colors.hzModalPet};
  border-radius: 20px;
  margin-bottom: 20px;
  ${device.tablet} {
    margin-bottom: 40px;
    width: 184px;
    height: 184px;
  }
`;

export const FieldTextarea = styled(Field)`
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.35;
  display: block;
  margin-top: 8px;
  padding: 14px 12px;
  width: 100%;
  height: 76px;

  background:${colors.hzModalPet};
  border: 1px solid ${colors.accentOrange};
  border-radius: 20px;
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
    border: 1px solid ${colors.accentOrange};
  }
  ::placeholder {
    position: absolute;
    top: 0px;
    left: 5px;
    padding: 14px 12px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.35;
    color: ${colors.inputSecText};
  }
  ${device.tablet} {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    margin-top: 20px;
    padding: 16px;
    /* width: 394px; */
    height: 113px;
  }
`;

export const LabelBox = styled.div`
  margin-bottom: 16px;
  ${device.tablet} {
    margin-bottom: 28px;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.47;
  color:${colors.primaryText};
  ${device.tablet} {
    font-size: 24px;
    line-height: 1.1;
  }
`;

export const FlexBox = styled.div`
  cursor: pointer;
  justify-content: center;
  text-align: center;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${device.tablet} {
    flex-direction: row-reverse;
    display: flex;
    gap: 20px;
  }
`;

export const NextBtn = styled.button`
  cursor: pointer;
  display: block;
  /* width: 240px; */
  height: 40px;
  background: ${colors.accentOrange};
  border-radius: 40px;
  border: none;
  color:${colors.white};
  transition: color 300ms linear, background-color 300ms linear;
  :hover,
  :focus {
    background-color: ${colors.white};
    color: ${colors.black};
    border: 2px solid ${colors.accentOrange};
  }

  ${device.tablet} {
    width: 180px;
    height: 44px;
    font-size: 20px;
    line-height: 1.35;
    letter-spacing: 0.04em;
  }
`;

export const CancelBtn = styled.button`
  font-family: "Manrope";
  font-style: normal;
  cursor: pointer;
  display: block;
  /* width: 240px; */
  height: 40px;
  background: ${colors.white};
  border-radius: 40px;
  transition: color 300ms linear, background-color 300ms linear;
  color: ${colors.black};
  border: 2px solid ${colors.accentOrange};
  :hover,
  :focus {
    background-color: ${colors.accentOrange};
    color: ${colors.white};
  }
  ${device.tablet} {
    width: 180px;
    height: 44px;
    font-size: 20px;
    line-height: 1.35;
    letter-spacing: 0.04em;
  }
`;

export const ErrorText = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.6;
  color: red;
  margin-top: -20px;
  position: absolute;
  ${device.tablet} {
    margin-left: 10px;
  }
  ${device.tablet} {
    margin-top: -30px;
  }
`;
