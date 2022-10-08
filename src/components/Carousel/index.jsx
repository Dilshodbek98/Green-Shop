import React from "react";
import Button from "../Generics/Button";
import { Container } from "../GlobaleContainer/container";
import { Content, Img, Main, SlickSlider, Slide } from "./style";
import img from "../../accests/images/bannerImage.png";
import { useNavigate } from "react-router-dom";
const Carousel = () => {
  const navigate = useNavigate()
  return (
    <Main>
      <Container>
        <SlickSlider dots arrows autoplay>
          <div className="wapper">
            <Slide>
              <Content>
                <p className="heading-text">Welcome to GreenShop</p>
                <h1 className="heading">
                  Let’s Make a Better <span>Planet</span>
                </h1>
                <p className="title">
                  We are an online plant shop offering a wide range of cheap and{" "}
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <Button onClick={()=>navigate('/shop')}>SHOP NOW</Button>
              </Content>
              <Img src={img} />
            </Slide>
          </div>
          <div>
            <Slide>
              <Content>
                <p className="heading-text">Welcome to GreenShop</p>
                <h1 className="heading">
                  Let’s Make a Better <span>Planet</span>
                </h1>
                <p className="title">
                  We are an online plant shop offering a wide range of cheap and{" "}
                  <br />
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. <br />
                  Order your favorite plants!
                </p>
                <Button onClick={()=>navigate('/shop')}>SHOP NOW</Button>
              </Content>
              <Img src={img} />
            </Slide>
          </div>
          <div>
            <Slide>
              <Content>
                <p className="heading-text">Welcome to GreenShop</p>
                <h1 className="heading">
                  Let’s Make a Better <span>Planet</span>
                </h1>
                <p className="title">
                  We are an online plant shop offering a wide range of cheap and{" "}
                  <br />
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. <br />
                  Order your favorite plants!
                </p>
                <Button onClick={()=>navigate('/shop')}>SHOP NOW</Button>
              </Content>
              <Img src={img} />
            </Slide>
          </div>
        </SlickSlider>
      </Container>
    </Main>
  );
};

export default Carousel;
