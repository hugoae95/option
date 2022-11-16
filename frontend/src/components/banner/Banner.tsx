import { Button, Grid } from "@mui/material";
import "./Banner.scss";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Grid
      container
      className="banner-grid"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item className="title" xs={12} alignItems="center">
        <h2>Somos wehehe</h2>
      </Grid>
      <Grid item className="body" xs={12}>
        <p>
          Una <b>Startup B</b> donde usamos la tecnología para construir un
          mundo mejor a través de productos digitales seguros, transparentes y
          simples.
        </p>
      </Grid>
      <Grid item className="actions" xs={12}>
        <Button className="back-to" variant="outlined">
          <Link to={"/create-client"}>¿Quieres lanzar una campaña?</Link>
        </Button>
        <Button className="btn-form" variant="contained">
          <Link to={"/help"}>¿Quieres ayudar?</Link>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Banner;
