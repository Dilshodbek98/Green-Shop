import styled from "styled-components";
export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 70px;
  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Card = styled.div`
  width: 250px;
  height: 310px;
  background-color: #fbfbfb;
  margin-bottom: 40px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  .title {
    padding-top: 5px;
    padding-left: 15px;
  }
  .price {
    color: #46a358;
    font-weight: 700;
    transform: translateY(-20px);
  }
`;
