import "./Header.scss";
import { Button, Grid } from "@mui/material";
import logo from "./../../../assets/svg/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Grid className="header container" container>
        <Grid item xs={6}>
          <Link to="/">
            <img src={logo} alt="wehehe" />
          </Link>
        </Grid>
        <Grid className="actions" item xs={6}>
          <Button className="btn-form btn-donate" variant="contained">
            <Link to="/donate">¡Dona!</Link>
          </Button>
          <Button className="back-to" variant="outlined">
            <Link to="/login">Ingresa</Link>
          </Button>
          <Button className="btn-form" variant="contained">
            <Link to="/register">Regístrate</Link>
          </Button>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
