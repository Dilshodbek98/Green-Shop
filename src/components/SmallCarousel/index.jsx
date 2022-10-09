import React from "react";
import { Container } from "../GlobaleContainer/container";
import { Card, Main, SlickSlider, Slide } from "./style";
import { useNavigate } from "react-router-dom";
import { dataProducts, smallData } from "../../utils/products";
const SmallCarousel = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <div className="wrapper">
        <h1>You may be interested in</h1>
        <SlickSlider dots arrows autoplay={true} slidesToShow={4}>
          {smallData.map((item) => {
            return (
              <div className="wapper">
                <Slide>
                  {item.id <= 10 && (
                    <Card
                      key={item.id}
                      onClick={() => navigate(`/products/${item.id}`)}
                    >
                      <img src={item.img} alt="" height={"219px"} />
                      <div className="title">
                        <p>{item.title}</p>
                        <p className="price">{item.price}</p>
                      </div>
                    </Card>
                  )}
                </Slide>
              </div>
            );
          })}
        </SlickSlider>
      </div>
    </Main>
  );
};

export default SmallCarousel;
