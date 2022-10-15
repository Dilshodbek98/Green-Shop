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
import { Button as ButtonAnt, Modal } from "antd";

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
  const [selectedGoods, setSelectedGoods] = useContext(CartContext);
  const showModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    let res = dataProducts.filter((value) => value.count >= 1);
    setSelectedGoods(res);
  }, [isModalOpen]);

  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/ordering");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const deleteItem = (id) => {
    dataProducts[id].count = 0;
    let res = selectedGoods.filter((vl) => vl.id !== id);
    setSelectedGoods(res);
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
                <ButtonAnt onClick={showModal}>
                  <Icon.Cart />
                </ButtonAnt>
                <ModalAnt
                  title="Shopping Cart"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={[
                    <ButtonAnt key="back" onClick={handleCancel}>
                      Cancel
                    </ButtonAnt>,
                    <ButtonAnt key="submit" type="primary" onClick={handleOk}>
                      Buy
                    </ButtonAnt>,
                  ]}
                >
                  <table>
                    <thead>
                      <tr>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedGoods.map((value) => {
                        return (
                          <tr key={value.id}>
                            <td className="product">
                              <img src={value.img} width={70} height={70} />
                              <h2>{value.title}</h2>
                            </td>
                            <td>
                              <p>${value.price}</p>
                            </td>
                            <td>
                              <p>{value.count}</p>
                            </td>
                            <td>
                              <p>
                                ${Number(value.count) * Number(value.price)}
                              </p>
                            </td>
                            <td className="delete">
                              <Icon.Delete
                                onClick={() => deleteItem(value.id)}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </ModalAnt>
              </>
              <Button onClick={() => navigate('/login')}>
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
