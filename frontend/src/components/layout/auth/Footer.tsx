import React from "react";
import { Grid } from "@mui/material";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-login">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div>© 2022 wehehe. All rights reserved.</div>
        </Grid>
        <Grid item xs={6}>
          <div>© 2022 wehehe. All rights reserved.</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
