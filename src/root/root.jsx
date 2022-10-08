import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";
import RootContext from "../context";
import DataProvider from "../context/data";
import Home from "../pages/Home";
import { routeData } from "../utils/routeData";

const Root = () => {
  return (
    <RootContext>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Navigate to={"/home"} />} />
          {routeData.map((item) => {
            return (
              <Route path={item.path} element={item.element} key={item.id} />
            );
          })}
          <Route path="home/*" element={<Home />} />
        </Route>
      </Routes>
    </RootContext>
  );
};

export default Root;
