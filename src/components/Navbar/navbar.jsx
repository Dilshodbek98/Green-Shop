import React from "react";
import { FunctionsBox, Links, Nav, NavbarLogo, NavbarWrapper, Navlink } from "./style";
import { NavLink } from "react-router-dom";
//icons
import Logo from "../../accests/icons/Logo.svg";
import search from "../../accests/icons/search.svg";
import cart from "../../accests/icons/cart.svg";
import logout from "../../accests/icons/logout.svg";
import menu from "../../accests/icons/menu.svg";
import Button from "../Button/button";
import { Container } from "../GlobaleContainer/container";

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <NavbarWrapper>
          <NavbarLogo>
            <img src={Logo} alt="" />
          </NavbarLogo>
          <Links>
            <NavLink
              className="link"
              style={({ isActive }) =>
                isActive ? { color: "#46A358" } : { color: "#3D3D3D" }
              }
              to={"/home"}
            >
              Home
            </NavLink>
            <NavLink
              className="link"
              style={({ isActive }) =>
                isActive ? { color: "#46A358" } : { color: "#3D3D3D" }
              }
              to={"/shop"}
            >
              Shop
            </NavLink>
          </Links>
          <FunctionsBox>
            <div className="search">
              <img src={search} alt="" />
            </div>
            <div className="cart">
              <img src={cart} alt="" />
            </div>
            <div className="menu">
              <img src={menu} alt="" />
            </div>
            <Button padding="8px 16px 8px 19px">
              <img src={logout} alt="" />
              <a>Log In</a>
            </Button>
          </FunctionsBox>
        </NavbarWrapper>
      </Container>
    </Nav>
  );
};

export default Navbar;
