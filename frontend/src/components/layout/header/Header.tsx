import "./Header.scss";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Option from "./../../../assets/svg/logo.svg";

const Header = () => {
  return (
    <header>
      <Grid className="header container" container>
        <Grid item xs={12}>
          <Link to="/">
            <img src={Option} alt="Option" />
          </Link>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
