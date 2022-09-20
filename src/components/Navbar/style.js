import { NavLink } from "react-router-dom";
import styled from "styled-components";


//Navbar
export const Nav = styled.div`
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
`
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
  .cart {
    cursor: pointer;
    :active {
      transform: scale(0.96);
    }
  }
  .menu {
    cursor: pointer;
    display: none;
    :active {
      transform: scale(0.96);
    }
    @media(max-width: 500px) {
      display: block;
    }
  }
`;
