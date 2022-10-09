import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Cart } from "../../accests/icons/cart.svg";
import { ReactComponent as Search } from "../../accests/icons/search.svg";
import { ReactComponent as Delete } from "../../accests/icons/delete.svg";
import { Modal } from "antd";
//Navbar
export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const NavbarWrapper = styled.div`
  height: 78px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #46a35880;
  align-items: center;
  @media (max-width: 500px) {
    height: 78px;
  }
`;
export const NavbarLogo = styled.div`
  cursor: pointer;
`;
export const Links = styled.div`
  display: flex;
  gap: 50px;
  .link {
    font-size: 16px;
    cursor: pointer;
    transition: scale 0.1s linear;
    :hover {
      transform: scale(1.05);
    }
  }
  @media (max-width: 500px) {
    display: none;
  }
  @media (max-width: 768px) {
    gap: 30px;
  }
  .active {
    color: var(--primaryColor);
  }
`;

export const FunctionsBox = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  .search {
    cursor: pointer;
    :active {
      transform: scale(0.96);
    }
    @media (max-width: 500px) {
      gap: 24px;
    }
  }

  .menu {
    cursor: pointer;
    display: none;
    :active {
      transform: scale(0.96);
    }
    @media (max-width: 500px) {
      display: block;
    }
  }
  .login {
    color: #fff;
  }
  .ant-btn {
    border: none;
  }
  .ant-modal {
    .ant-btn-primary {
      background-color: var(--primatyColor);
    }
  }
`;

export const Navlink = styled(NavLink)`
  color: var(--secondaryColor);
`;

export const Icon = styled.div``;

Icon.Cart = styled(Cart)`
  :hover {
    & path {
      fill: var(--primaryColor);
    }
  }
`;
Icon.Search = styled(Search)`
  cursor: pointer;
  :hover {
    & path {
      fill: var(--primaryColor);
    }
  }
`;
Icon.Delete = styled(Delete)`
  cursor: pointer;
  :hover {
    & path {
      fill: var(--primaryColor);
    }
  }
`;

export const ModalAnt = styled(Modal)`
  .ant-btn-primary {
    background-color: var(--primaryColor);
    border-color: var(--primaryColor);
  }
  .ant-btn-default {
    background-color: white;
    border-color: gray;
    :hover {
      color: var(--primaryColor);
    }
  }

  table {
    width: 100%;
    td {
      text-align: center;
    }
    h2{
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
    .delete{
      transform: translateY(-5px);
    }
  }
`;
