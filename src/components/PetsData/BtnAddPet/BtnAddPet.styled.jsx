import styled from "styled-components";

export const AddPetBtn = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(245, 146, 86, 1);
  border-radius: 40px;
  border: none;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.11);
    transition: transform 300ms linear;
    transform: scale(1.05);
    border: 2px solid #ffffff;
  }
`;
