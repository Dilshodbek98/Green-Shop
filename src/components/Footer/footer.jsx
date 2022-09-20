import React from "react";
import { Container } from "../GlobaleContainer/container";
import { Column, List, Section, Wrapper } from "./style";

//Social Media icons
import instagram from "../../accests/icons/instagram.svg";
import facebook from "../../accests/icons/facebook.svg";
import twitter from "../../accests/icons/twitter.svg";
import linkedin from "../../accests/icons/linkedin.svg";
import union from "../../accests/icons/union.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <Container>
        <Wrapper>
          <Column>
            <List>
              <li className="heading">
                <h2>My Account</h2>
              </li>
              <li>
                <a>My Account</a>
              </li>
              <li>
                <a>Address</a>
              </li>
              <li>
                <a>Wishlist</a>
              </li>
            </List>
          </Column>
          <Column>
            <List>
              <li className="heading">
                <h2>Categories</h2>
              </li>
              <li>
                <a>House Plants</a>
              </li>
              <li>
                <a>Potter Plants</a>
              </li>
              <li>
                <a>Seeds</a>
              </li>
              <li>
                <a>Small Plants</a>
              </li>
              <li>
                <a>Accessories</a>
              </li>
            </List>
          </Column>
          <Column>
            <List>
              <li className="heading">
                <h2>Social Media</h2>
              </li>
              <li className="icons">
                <div>
                  <a href="https://www.facebook.com/" target={"_blank"}>
                    <img src={facebook} alt="" />
                  </a>
                </div>
                <div>
                  <a href="https://www.instagram.com/" target={"_blank"}>
                    <img src={instagram} alt="" />
                  </a>
                </div>
                <div>
                  <a href="https://www.twitter.com/" target={"_blank"}>
                    <img src={twitter} alt="" />
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/" target={"_blank"}>
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <div>
                  <a href="https://www.union.com/" target={"_blank"}>
                    <img src={union} alt="" />
                  </a>
                </div>
              </li>
            </List>
          </Column>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Footer;
