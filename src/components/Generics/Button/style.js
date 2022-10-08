import styled from "styled-components";

export const Btn = styled.button`
  min-width: 100px;
  width: fit-content;
  min-height: 40px;
  height: fit-content;
  gap: 8px;

  border-radius: 6px;
  background-color: #46a358;
  color: white;
  padding: 10px 20px;
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
  @media (max-width: 500px) {
    display: none;
  }
`;