import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Footer from "../../components/layout/auth/Footer";
import Form from "../../components/layout/auth/confirm/Form";
import Sidebar from "../../components/layout/auth/Sidebar";
import { randomPhrases } from "../../mocks/phrases";
import { useLocation } from "react-router-dom";
import { CONFIRM_REGISTER } from "../../constants";

const Confirm = () => {
  const [title, setTitle] = useState("Confirma tu ingreso");
  const [returnPath, setReturnPath] = useState("/login");
  const text = randomPhrases();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === CONFIRM_REGISTER) {
      setTitle("Confirma tu registro");
      setReturnPath("/register");
    }
  }, [location]);

  return (
    <>
      <Grid container>
        <Form title={title} returnPath={returnPath} />
        <Sidebar text={text} />
      </Grid>
      <Footer />
    </>
  );
};

export default Confirm;
