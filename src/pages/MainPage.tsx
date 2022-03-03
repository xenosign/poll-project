import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Canvas from "../components/Canvas";

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Content />
      <Canvas />
      <Footer />
    </div>
  );
};

export default MainPage;
