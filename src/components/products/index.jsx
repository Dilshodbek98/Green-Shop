import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { dataProducts } from "../../utils/products";
import Button from "../Generics/Button";
import { Button as ButtonAnt, message } from "antd";
import { Container } from "../GlobaleContainer/container";
import { Main, Section } from "./stylde";
const Products = () => {
  const params = useParams();
  const obj = dataProducts[Number(params?.id)];
  const [count, setCount] = useState([obj.id]);
  const [state, setState] = useState(1);

  const info = () => {
    message.success("Added to your cart");
  };
  return (
    <Main>
      <Container>
        <Section>
          <div>{obj.img}</div>
          <div className="details">
            <h1>{obj.title}</h1>
            <h2>{obj.price}</h2>
            <div className="divider"></div>
            <p className="short-description-heading">Short Description:</p>
            <p className="short-description">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground.{" "}
            </p>
            <p className="size">Size:</p>
            <div className="wrapper">
              <div className="sizes">
                <div className="size size-s">S</div>
                <div className="size size-m">M</div>
                <div className="size size-l">L</div>
                <div className="size size-xl">XL</div>
              </div>
              <div className="buy">
                <div
                  className="box minus"
                  onClick={() => {
                    if (state > 0) {
                      setState(state - 1);
                      dataProducts[Number(params.id)].count -= 1;
                    }
                  }}
                >
                  -
                </div>
                <div className="count">{state}</div>
                <div
                  className="box plus"
                  onClick={() => {
                    setState(state + 1);
                    dataProducts[Number(params.id)].count += 1;
                  }}
                >
                  +
                </div>
                <Button>BUY NOW</Button>
                <ButtonAnt onClick={info}>ADD TO CART</ButtonAnt>
              </div>
            </div>
            <p className="categories">Categories: {obj.type}</p>
          </div>
        </Section>
        <Section column>
          <h1 className="descrtiption-heading1">Product Description</h1>
          <hr />
          <p className="text">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero
            vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
            Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
            vulputate, sapien libero hendrerit est, sed commodo augue nisi non
            neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
            accumsan elit odio quis mi. Cras neque metus, consequat et blandit
            et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
            ligula euismod eget. The ceramic cylinder planters come with a
            wooden stand to help elevate your plants off the ground.{" "}
          </p>
          <p className="description-heading">Living Room:</p>
          <p className="text">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="description-heading">Dining Room:</p>
          <p className="text">
            The benefits of houseplants are endless. In addition to cleaning the
            air of harmful toxins, they can help to improve your mood, reduce
            stress and provide you with better sleep. Fill every room of your
            home with houseplants and their restorative qualities will improve
            your life.
          </p>
          <p className="description-heading">Living Room:</p>
          <p className="text">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Section>
      </Container>
    </Main>
  );
};

export default Products;
