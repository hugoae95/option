import "./Header.scss";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Grid className="header container" container>
        <Grid item xs={12}>
          <Link to="/">Option</Link>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
