import React from "react";
import { Grid } from "@mui/material";
import { Footer } from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";

const Layout = (props: any) => {
  return (
    <>
      <Header></Header>
      <Grid className="footer container" container>
        {props.children}
      </Grid>
      <Footer></Footer>
    </>
  );
};

export default Layout;
