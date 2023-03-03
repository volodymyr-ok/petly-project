import styled from "styled-components";

export const BarWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Bar = styled.ul`
  /* width: 100%; */
  display: flex;
  gap: 10px;
  /* justify-content: space-evenly; */
`;

export const NumBtn = styled.button`
  background-color: ${({ active }) => (active ? "#f3800f" : "#397eba")};
`;
