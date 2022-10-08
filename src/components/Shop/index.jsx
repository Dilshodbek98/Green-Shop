import React from "react";
import { useNavigate } from "react-router-dom";
import { dataProducts } from "../../utils/products";
import { Container } from "../GlobaleContainer/container";
import { Card, Main, Wrapper } from "./style";

const ShopComponent = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <Container>
        <Wrapper>
          {dataProducts.map((item, index) => {
            return (
              <Card
                key={item.id}
                onClick={() => navigate(`/products/${item.id}`)}
              >
                <img src={item.img} alt="" />
                <div className="title">
                  <p>{item.title}</p>
                  <p className="price">{item.price}</p>
                </div>
              </Card>
            );
          })}
        </Wrapper>
      </Container>
    </Main>
  );
};

export default ShopComponent;

// obj.func