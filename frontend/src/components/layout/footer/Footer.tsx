import "./Footer.scss";
import { Button, Grid } from "@mui/material";

export const Footer = () => {
  return (
    <footer>
      <Grid className="footer container" container>
        <Grid item xs={12}>
          <span>© 2022 Option. All rights reserved.</span>
        </Grid>
      </Grid>
    </footer>
  );
};
