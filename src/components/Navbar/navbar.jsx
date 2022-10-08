import React, { useContext } from "react";
import {
  FunctionsBox,
  Icon,
  Links,
  Nav,
  NavbarLogo,
  NavbarWrapper,
  Navlink,
  ModalAnt,
} from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import { Button as ButtonAnt } from "antd";

//icons
import Logo from "../../accests/icons/Logo.svg";
import logout from "../../accests/icons/logout.svg";
import { Container } from "../GlobaleContainer/container";
import { routeData } from "../../utils/routeData";
import Button from "../Generics/Button";
import Footer from "../Footer/footer";
import { useState } from "react";
import { CartContext } from "../../context/cart";
import { dataProducts } from "../../utils/products";
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedGoods, setSelectedGoods] = useContext(CartContext)
   const showModal = () => {
     setIsModalOpen(true);
   };

  useEffect(()=> {
  let res = dataProducts.filter(value => value.count > 1)
  setSelectedGoods(res)
  }, [isModalOpen])

   const handleOk = () => {
     setIsModalOpen(false);
   };

   const handleCancel = () => {
     setIsModalOpen(false);
   };
  return (
    <>
      <Nav>
        <Container>
          <NavbarWrapper>
            <NavbarLogo onClick={() => navigate("/home")}>
              <img src={Logo} alt="" />
            </NavbarLogo>
            <Links>
              {routeData.map((item, index) => {
                return (
                  !item.hidden && (
                    <Navlink
                      className={({ isActive }) => isActive && "active"}
                      key={index}
                      to={item.path}
                    >
                      {item.title}
                    </Navlink>
                  )
                );
              })}
            </Links>
            <FunctionsBox>
              <Icon.Search />
              <>
                <ButtonAnt>
                  <Icon.Cart onClick={showModal} />
                </ButtonAnt>
                <ModalAnt
                  title="Basic Modal"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={[
                    <ButtonAnt key="back" onClick={handleCancel}>
                      Cancel
                    </ButtonAnt>,
                    <ButtonAnt
                      key="submit"
                      type="primary"
                      onClick={handleOk}
                    >
                      Buy
                    </ButtonAnt>,
                  ]}
                >
                  {selectedGoods.map(value => {
                    return(
                      <div key={value.id}>
                        <i>{value.img}</i>
                        <i>{value.title}</i>
                        <i>{value.count}</i>
                      </div>
                    )
                  })}
                </ModalAnt>
              </>
              <Button>
                <img src={logout} alt="" />
                <a className="login">Log In</a>
              </Button>
            </FunctionsBox>
          </NavbarWrapper>
        </Container>
      </Nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
