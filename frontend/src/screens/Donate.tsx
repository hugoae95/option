import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <div className="page page-center page-donate">
      <div className="container">
        <h1>¡Gracias!</h1>
        <p>
          Esta donación la harás directamente a wehehe y no a una fundación
          determinada, pues el dinero que recaudamos a través de este canal, lo
          usamos para la ejecución de proyectos internos y para soportar nuestra
          operación. En cualquier caso, al realizar esta donación estás
          aceptando nuestro <Link to="/legal">Aviso legal para donaciones</Link>
          .
        </p>
        <Grid className="actions" item xs={12}>
          <Button className="btn-form" variant="contained">
            <Link to="/">¡Dona!</Link>
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default Donate;
