import styled from "styled-components";

const Main = styled.div`
margin-top: 97px;
  display: flex;
  width: 100%;
  justify-content: center;
`

const Section = styled.div`
  display: flex;
  flex-direction: ${({ column }) => column && "column"};
  width: 100%;
  .details {
    h1 {
      font-weight: 700;
      font-size: 28px;
      line-height: 16px;
      color: var(--secondaryColor);
    }
    h2 {
      font-weight: 700;
      font-size: 22px;
      line-height: 16px;
      color: var(--primaryColor);
      margin: 21px 0 15px 0;
    }
    .divider {
      width: 100%;
      height: 1px;
      background-color: rgba(70, 163, 88, 0.5);
    }
    .short-description-heading {
      font-weight: 500;
      font-size: 15px;
      line-height: 16px;
      color: var(--secondaryColor);
      margin: 13px 0 10px 0;
    }
    .short-description {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--thirdColor);
      margin-bottom: 24px;
    }
    .size {
      font-weight: 500;
      font-size: 15px;
      line-height: 16px;
      color: var(--secondaryColor);
      margin-bottom: 11px;
    }
    .sizes {
      display: flex;
      gap: 10px;
    }
    .size {
      width: 32px;
      height: 32px;
      border: 1px solid #eaeaea;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      line-height: 16px;
      font-weight: 700;
      cursor: pointer;
      :hover {
        border-color: var(--primaryColor);
        color: var(--primaryColor);
      }
    }
    .wrapper {
      display: flex;
      justify-content: space-between;
    }
    .buy {
      display: flex;
      gap: 23px;
      align-items: center;
    }
    .box {
      width: 38px;
      height: 38px;
      background-color: var(--primaryColor);
      border-radius: 50%;
      color: white;
      font-size: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      :active {
        transform: scale(0.95);
      }
    }
  }
  .descrtiption-heading1 {
    font-size: 17px;
    width: fit-content;
    line-height: 16px;
    font-weight: 700;
    color: var(--primaryColor);
    border-bottom: 3px solid var(--primaryColor);
    padding-bottom: 12px;
    transform: translateY(10px);
  }
  .description-heading {
    margin-bottom: 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: var(--secondaryColor);
  }

  .ant-btn {
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
  }
`;

export {Main, Section}