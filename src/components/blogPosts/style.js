import styled from "styled-components";

export const Section = styled.div`
  margin: 138px 0 103px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .heading {
    margin-bottom: 15px;
    text-align: center;
  }
  .text {
    margin-bottom: 35px;
    text-align: center;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    justify-content: space-around;
    gap: 20px;
  }
  @media (max-width: 1400px) {
    justify-content: space-around;
    gap: 20px;
  }
  @media (min-width: 500px) and (max-width: 775px) {
    gap: 20px;
    justify-content: space-around;
  }
`;

export const Card = styled.div`
  background-color: #fbfbfb;
  cursor: pointer;
  width: 268px;
  height: 380px;
  transition: transform 0.2s linear;
  :hover {
    transform: scale(1.05);
  }
  .content {
    padding-left: 13px;
    padding-top: 9px;
    .date {
      color: #46a358;
      margin-bottom: 4px;
    }
    .h2{
      margin-bottom: 4px;
    }
    .title{
      margin-bottom: 9px;
    }
    a{
      margin-bottom: 13px;
      :hover{
        color: #46a358;
      }
    }
  }
`;