import styled from "styled-components";

export const Btn = styled.button`
  border-radius: 6px;
  border: none;
  width: fit-content;
  height: fit-content;
  padding: ${({ padding }) => padding};
  background-color: #46a358;
  color: #fff;
  display: flex;
  gap: 8px;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
  @media (max-width: 500px) {
    display: none;
  }
`;