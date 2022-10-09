import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  background-color: #fbfbfb;
`;

export const Services = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .card {
    margin-top: 23px;
    margin-bottom: 34px;
    padding: 0 23px 0 24px;
    cursor: pointer;
    border-right: 1px solid rgba(70, 163, 88, 0.1);
  }
  .input-box {
    margin: 37px 25px 23px 23px;
    h3 {
      margin-bottom: 18px;
    }
    .input {
      margin-bottom: 17px;
      border: none;
      input {
        height: 40px;
        width: 269px;
        border: 1px solid rgba(0, 0, 0, 0.06);
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        padding: 11px 0 12px 12px;
        :focus {
          outline: none;
        }
      }
      input[type="email"]{
        margin-bottom: 10px;
      }
      button {
        width: 85px;
        height: 40px;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        background-color: #46a358;
        border: none;
        transform: translateY(2px);
        cursor: pointer;
        :active {
          transform: scale(0.99);
        }
        p {
          font-size: 18px;
          color: #fff;
          font-weight: 700;
          line-height: 16px;
        }
      }
    }
  }
  .text {
    max-width: 354px;
    line-height: 22px;
  }
  @media (max-width: 675px){
    flex-direction: column;
    gap: 10px;
    place-content: center;
    .card{
      display: flex;
      border: none;
      justify-content: center;
      align-items: center;
    }
}
`;

export const Contact = styled.div`
  background-color: rgba(70, 163, 88, 0.1);
  display: flex;
  min-height: 88px;
  align-items: center;
  padding-left: 23px;
  flex-wrap: wrap;
  @media (max-width: 550px) {
    height: 262px;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    padding: 0px;
  }
  .logo {
    margin-right: 90px;
    @media (max-width: 550px) {
      margin-right: 0;
    }
  }
  .location {
    display: flex;
    gap: 12px;
    margin-right: 63px;
    p {
      transform: translateY(5px);
    }
    @media (max-width: 550px) {
      margin-right: 0;
    }
  }
  .message {
    display: flex;
    gap: 15px;
    margin-right: 63px;
    p {
      transform: translateY(5px);
    }
    @media (max-width: 550px) {
      margin-right: 0;
    }
  }
  .phone {
    display: flex;
    align-items: center;
    gap: 15px;
    p {
      transform: translateY(5px);
    }
  }
  @media (max-width: 550px) {
    margin-right: 0;
  }
`;
