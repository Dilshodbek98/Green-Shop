import React from "react";
import { useState } from "react";
import { Container } from "../GlobaleContainer/container";
import { Main, LoginBox } from "./style";
import x from "../../accests/icons/x.svg";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate()
  const [data, setData] = useState();
  const save = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onLogin = () => {
    fetch("https://greenshophorizontteam.herokuapp.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((res) => {
        if(res.token){
          localStorage.setItem("token", res.token);
          navigate('/addProduct')
        }else{
          alert('wrong password')
        }
      });
  };

  return (
    <Main>
      <Container>
        <LoginBox>
          <header>
            <img
              className="iks"
              src={x}
              alt=""
              onClick={() => navigate("/home")}
            />
          </header>

          <p className="label">Enter your username and password to login.</p>
          <input
            name="email"
            type="text"
            onChange={save}
            placeholder="Admin"
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
        </LoginBox>
      </Container>
    </Main>
  );
};

export default Admin;
