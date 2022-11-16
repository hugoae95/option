import React from "react";
import { Footer } from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";

const Layout = (props: any) => {
  return (
    <>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
