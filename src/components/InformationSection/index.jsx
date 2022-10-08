import React from "react";
import { Container } from "../GlobaleContainer/container";
import { Contact, Section, Services, Wrapper } from "./styled";

//images
import img1 from "../../accests/images/services/group1.png";
import img2 from "../../accests/images/services/group2.png";
import img3 from "../../accests/images/services/group3.png";
//icons
import logo from '../../accests/icons/Logo.svg'
import location from "../../accests/icons/location.svg";
import message from "../../accests/icons/message.svg";
import calling from "../../accests/icons/calling.svg";
import Button from "../Generics/Button";


const InformationSection = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Services>
            <div className="card">
              <img src={img1} alt="" />
            </div>
            <div className="card">
              <img src={img2} alt="" />
            </div>
            <div className="card">
              <img src={img3} alt="" />
            </div>
            <div className="input-box">
              <h3>Would you like to join newsletters?</h3>
              <div className="input">
                <input type="email" placeholder="enter your email address..." />
                <Button>
                  Join
                </Button>
              </div>
              <p className="text">
                We usually post offers and challenges in newsletter. We’re your
                online houseplant destination. We offer a wide range of
                houseplants and accessories shipped directly from our
                (green)house to yours!{" "}
              </p>
            </div>
          </Services>
          <Contact>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="location">
              <img src={location} alt="" />
              <p>
                70 West Buckingham Ave.
                <br /> Farmingdale, NY 11735
              </p>
            </div>
            <div className="message">
              <img src={message} alt="" />
              <p>contact@greenshop.com</p>
            </div>
            <div className="phone">
              <img src={calling} alt="" />
              <p>+88 01911 717 490</p>
            </div>
          </Contact>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default InformationSection;
//1231231