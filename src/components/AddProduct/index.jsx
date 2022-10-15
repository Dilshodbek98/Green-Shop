import React from "react";
import { useState } from "react";
import { Container } from "../GlobaleContainer/container";
import { Main, LoginBox } from "./style";
import x from "../../accests/icons/x.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AddProduct = () => {
  const [data, setData] = useState();
  const [data1, setData1] = useState();
  const navigate = useNavigate();
  const save = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    fetch("https://greenshophorizontteam.herokuapp.com/product")
      .then((res) => res.json())
      .then((res) => setData1(res));
  }, []);

  const add = () => {
    fetch("https://greenshophorizontteam.herokuapp.com/product/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
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

          <p className="label">Enter details of product.</p>
          <input
            name="productId"
            type="text"
            onChange={save}
            placeholder="productId"
          />
          <input
            name="img"
            type="text"
            onChange={save}
            placeholder="Image URL"
          />
          <input name="title" type="text" onChange={save} placeholder="Title" />
          <input
            name="desc"
            type="text"
            onChange={save}
            placeholder="Description"
          />
          <input name="price" type="text" onChange={save} placeholder="Price" />
          <input name="type" type="text" onChange={save} placeholder="Type" />
          <button className="loginBtn" onClick={add}>
            Add To Products
          </button>
          <div>
            {data1?.map((item) => {
              return (
                <div>
                  <h1>{item?.desc}</h1>
                  <img src={item?.img} alt="" width={100} height={100}/>
                </div>
              );
            })}
          </div>
        </LoginBox>
      </Container>
    </Main>
  );
};

export default AddProduct;
