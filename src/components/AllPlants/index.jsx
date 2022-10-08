import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataProducts } from "../../utils/products";
import { Container } from "../GlobaleContainer/container";
import { Pagination as PaginationAnt } from "antd";
import { Card, Category, Main, MainWrapper, Wrapper } from "./style";
import img12 from "../../accests/images/image12.png";
const AllPlants = () => {
  const [data, setData] = useState(dataProducts);
  const [postsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [active, setActive] = useState("");

  const IndexOfLastItem = postsPerPage * currentPage;
  const IndexOfFirstItem = IndexOfLastItem - postsPerPage;
  const currentData = data.slice(IndexOfFirstItem, IndexOfLastItem);

  let amountOfPages = [];
  for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
    amountOfPages.push(i);
  }
  const navigate = useNavigate();
  const handleChange = () => {
    setCurrentPage(currentPage + 1);
  };

  //filter data
  const filter1 = () => {
    let res = dataProducts.filter((item) => {
      return item.type === "houseplants";
    });
    setData(res);
    setActive("houseplants");
  };
  const filter2 = () => {
    let res = dataProducts.filter((item) => {
      return item.type === "potterplants";
    });
    setData(res);
    setActive("potterplants");
  };
  const filter3 = () => {
    let res = dataProducts.filter((item) => {
      return item.type === "smallplants";
    });
    setData(res);
    setActive("smallplants");
  };
  const filter4 = () => {
    let res = dataProducts.filter((item) => {
      return item.type === "bigplants";
    });
    setData(res);
    setActive("bigplants");
  };
  const filter5 = () => {
    let res = dataProducts.filter((item) => {
      return item.type === "gardening";
    });
    setData(res);
    setActive("gardening");
  };
  console.log(active);
  return (
    <>
      <Main>
        <Container>
          <h1
            style={{
              color: "#46A358",
              fontSize: "30px",
              width: "100%",
              display: "block",
              margin: "20px 0",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => setData(dataProducts)}
          >
            All Plants
          </h1>
          <MainWrapper>
            <Category>
              <div className="categories">
                <h1 className="heading">Categories</h1>
                <p
                  className={active === "houseplants" ? "active" : ""}
                  onClick={filter1}
                >
                  House Plants(30)
                </p>
                <p
                  className={active === "potterplants" ? "active" : ""}
                  onClick={filter2}
                >
                  Potter Plants(30)
                </p>
                <p
                  className={active === "smallplants" ? "active" : ""}
                  onClick={filter3}
                >
                  Small Plants(30)
                </p>
                <p
                  className={active === "bigplants" ? "active" : ""}
                  onClick={filter4}
                >
                  Big Plants(15)
                </p>
                <p
                  className={active === "gardening" ? "active" : ""}
                  onClick={filter5}
                >
                  Gardening(30)
                </p>
              </div>
              <div className="banner">
                <h1>Super Sale</h1>
                <h2>UP TO 75% OFF</h2>
                <div className="blur"></div>
                <img src={img12} alt="photo" />
              </div>
            </Category>
            <div>
              <Wrapper>
                {currentData.map((item, index) => {
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
              <PaginationAnt
                current={currentPage}
                defaultCurrent={1}
                total={data.length}
                pageSize={8}
                onChange={handleChange}
              />
            </div>
          </MainWrapper>
        </Container>
      </Main>
    </>
  );
};
export default AllPlants;
