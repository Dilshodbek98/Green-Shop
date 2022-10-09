import styled from "styled-components";
import { ReactComponent as Delete } from "../../accests/icons/delete.svg";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  .wrapper {
    width: 100%;
    h1 {
      font-size: 17px;
      line-height: 17px;
      font-weight: 700;
      color: var(--primaryColor);
      text-align: center;
      margin-top: 30px;
    }
  }
  table {
    width: 100%;
    td {
      text-align: center;
    }
    h2 {
      font-weight: 500;
      line-height: 16px;
      font-size: 16px;
      color: var(-secondaryColor);
    }
    .product {
      width: 100%;
      display: flex;
      gap: 10px;
      align-items: center;
    }
    .delete {
      transform: translateY(-5px);
    }
  }
`;
const Icon = styled.div``;

Icon.Delete = styled(Delete)`
  cursor: pointer;
  :hover {
    & path {
      fill: var(--primaryColor);
    }
  }
`;
export { Main, Icon };
