import React from "react";
import { BrowserRouter } from "react-router-dom";
import BlogPosts from "../components/blogPosts";
import Footer from "../components/Footer/footer";
import InformationSection from "../components/InformationSection";
import Navbar from "../components/Navbar/navbar";

const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <BlogPosts/>
        <InformationSection/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default Root;
