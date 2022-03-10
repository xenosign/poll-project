import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Canvas from "../components/canvas/Canvas";
import Ex from "../components/typescript/Ex";

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Content />
      <Ex />
      <Canvas />
      <Footer />
    </div>
  );
};

export default MainPage;
