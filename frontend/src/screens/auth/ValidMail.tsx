import { Grid } from "@mui/material";
import React from "react";
import Footer from "../../components/layout/auth/Footer";
import Form from "../../components/layout/auth/validMail/Form";
import Sidebar from "../../components/layout/auth/Sidebar";
import { randomPhrases } from "../../mocks/phrases";

const ValidMail = () => {
  const text = randomPhrases();

  return (
    <>
      <Grid container>
        <Form />
        <Sidebar text={text} />
      </Grid>
      <Footer />
    </>
  );
};

export default ValidMail;
