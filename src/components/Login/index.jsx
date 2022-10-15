import { Tabs } from "antd";
import React from "react";
import { useState } from "react";
import { Container } from "../GlobaleContainer/container";
import {
  Main,
  LoginBox,
  TabsAnt,
  RegisterBox,
} from "./style";
import google from "../../accests/icons/google.svg";
import facebook from "../../accests/icons/facebook.svg";
import x from "../../accests/icons/x.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState();
  const navigate = useNavigate()
  const save = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onLogin = () => {
    fetch("https://greenshophorizontteam.herokuapp.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => console.log(res));
  };

  const send = () => {
    fetch(`https://houzing-app.herokuapp.com/api/public/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
    .then(res => console.log(res));
  };
  return (
    <Main>
      <Container>
        <TabsAnt>
          <Tabs.TabPane tab="Login" key={1}>
            <LoginBox>
              <header>
                <img
                  className="iks"
                  src={x}
                  alt=""
                  onClick={() => navigate("/home")}
                />
              </header>

              <p className="label">
                Enter your username and password to login.
              </p>
              <input
                name="email"
                type="text"
                onChange={save}
                placeholder="Almamun_uxui@outlook.com"
              />
              <input
                name="password"
                type="password"
                onChange={save}
                className="password"
                placeholder="Password"
              />

              <button className="loginBtn" onClick={() => onLogin()}>
                Login
              </button>

              <div className="or">
                <div className="line-horizontal"></div>
                <p>Or login with</p>
                <div className="line-horizontal"></div>
              </div>

              <div className="google">
                <img src={google} alt="" />
                <p className="text">Login with Google</p>
              </div>

              <div className="google facebook">
                <img src={facebook} alt="" />
                <p className="text">Login with Facebook</p>
              </div>
            </LoginBox>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Register" key={2}>
            <RegisterBox>
              <div className="iks">
                <img src={x} alt="" onClick={() => navigate("/home")} />
              </div>

              <p className="label">
                Enter your email and password to register.
              </p>

              <div className="input-field">
                <input
                  onChange={save}
                  name="email"
                  type="email"
                  id=""
                  placeholder="Enter your email address"
                />
                <input
                  onChange={save}
                  name="password"
                  type="password"
                  id=""
                  placeholder="Password"
                />
              </div>

              <button className="registerBtn" onClick={send}>
                Register
              </button>

              <div className="or">
                <div className="line-horizotal"></div>
                <p>Or register with</p>
                <div className="line-horizotal"></div>
              </div>

              <div className="google">
                <img src={google} alt="" />
                <p className="text">Continue with Google</p>
              </div>
              <div className="google facebook">
                <img src={facebook} alt="" />
                <p className="text">Continue with Facebook</p>
              </div>
            </RegisterBox>
          </Tabs.TabPane>
        </TabsAnt>
      </Container>
    </Main>
  );
};

export default Login;
