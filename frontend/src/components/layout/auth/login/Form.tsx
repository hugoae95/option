import { Button, Grid, TextField } from "@mui/material";
import logoLogin from "./../../../../assets/svg/logoLogin.svg";
import { Link } from "react-router-dom";
import "./Form.scss";

const Form = () => {
  return (
    <Grid item xs={6}>
      <div className="full full-form">
        <img src={logoLogin} alt="Login" />
        <div className="login-form">
          <h1>Ingresa</h1>
          <TextField
            className="input-form"
            id="filled-basic"
            label="Email *"
            variant="filled"
            color="secondary"
          />
          <Button className="btn-form" variant="contained">
            Validar
          </Button>
          <div className="create-account">
            ¿No te has registrado?{" "}
            <Link to={"/create-account"}>Crea una cuenta</Link>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default Form;
