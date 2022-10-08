import React from "react";
import { Container } from "../GlobaleContainer/container";
import { Card, Cards, Section, Wrapper } from "./style";

import rightArrow from "../../accests/icons/arrowRight2.svg";
import { data } from "../../utils/dataPosts";

const BlogPosts = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <h1 className="heading">Our Blog Posts</h1>
          <p className="text">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
          <Cards>
            {data.map((item) => {
              return (
                <Card key={item.id}>
                  <a>{item.img}</a>
                  <div className="content">
                    <p className="date">{item.date}</p>
                    <h2>{item.heading}</h2>
                    <h2 className="h2">{item.heading2}</h2>
                    <p className="title">{item.title}</p>
                    <a className="read-more">
                      Read More <img src={rightArrow}/>
                    </a>
                  </div>
                </Card>
              );
            })}
          </Cards>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default BlogPosts;
