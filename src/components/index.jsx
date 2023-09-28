import React from "react";
import Nav from "../layouts/Nav";
import Services from "./Services";
import Products from "./Products";
import Footer from "./Footer";

const Index = (props) => {
  return (
    <div style={{ position: 'relative' }}>
      <Nav />
      <Services />
      <Products />
      <Footer />
    </div>
  );
};

export default Index;
