import styled from "styled-components";

export const Section = styled.div`
`

export const Wrapper = styled.div`
  height: 236px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  background-color: #fbfbfb;
  border-bottom: 1px solid rgba(70, 163, 88, 0.2);
  padding: 33px 0 27px 23px;
  @media (max-width: 500px) {
    height: 320px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
  }
`;

export const Column = styled.div`

`

export const List = styled.ul`
  li {
    margin-bottom: 10px;
    a {
      cursor: pointer;
      :hover {
        color: #46a358;
      }
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      border: 1px solid rgba(70, 163, 88, 0.2);
      width: 30px;
      height: 30px;
      margin-right: 10px;
      cursor: pointer;
      :hover {
        transform: scale(1.1);
      }
    }
  }
  .heading {
    margin-bottom: 8px;
  }
  .icons {
    display: flex;
  }
`;