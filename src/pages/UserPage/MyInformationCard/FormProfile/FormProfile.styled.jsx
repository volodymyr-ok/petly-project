import styled from "styled-components";

export const Form = styled.form`
  margin-top: 36px;
`;

export const BoxInput = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 156px;
    padding: 4px 18px 4px 4px;
  }
  input:disabled {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: #111111;
    background-color: #ffffff;
    border: none;
  }
`;

export const NameInput = styled.label`
  margin-right: 8px;
  width: 56px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #111111;
`;
