import styled from "styled-components";
import { Pagination } from "antd";
export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 70px;
  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
cursor: pointer;
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

export const Number = styled.p`
  border: 1px solid blue;
  padding: 5px;
`;

export const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const Category = styled.div`
  width: 300px;
  .categories {
    .heading {
      font-size: 18px;
      line-height: 16px;
      font-weight: 700;
      color: var(--secondaryColor);
    }
    p {
      font-weight: 400;
      line-height: 40px;
      font-size: 15px;
      color: var(--secondaryColor);
      cursor: pointer;
    }
    .active {
      color: var(--primaryColor);
    }
  }
  .banner {
    position: relative;
    width: 300px;
    height: 470px;

    .blur {
      background: linear-gradient(
        rgba(70, 163, 88, 0.1) 0%,
        rgba(70, 163, 88, 0.03) 100%
      );
      z-index: 1;
      position: absolute;
      width: 100%;
      height: 100%;
    }
    h1 {
      z-index: 2;
      font-size: 65px;
      line-height: 65px;
      font-weight: 400;
      position: absolute;
      color: var(--primaryColor);
      top: 22px;
      left: 30px;
      white-space: nowrap;
    }
    h2 {
      z-index: 2;
      font-size: 23px;
      line-height: 16px;
      font-weight: 700;
      position: absolute;
      color: var(--secondaryColor);
      top: 94px;
      left: 100px;
      white-space: nowrap;
    }
    img {
      position: absolute;
      left: -30px;
      bottom: 0;
    }
  }
  @media (max-width: 1440px) {
    width: 200px;
  }
  @media (max-width: 1200px) {
    .banner {
      display: none;
    }
  }
`;
