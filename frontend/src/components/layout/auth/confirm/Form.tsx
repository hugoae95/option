import { Button, Grid, TextField } from "@mui/material";
import logoLogin from "./../../../../assets/svg/logoLogin.svg";
import { Link } from "react-router-dom";
import "./Form.scss";

interface IProps {
  title: string;
  returnPath: string;
}

const Form = (props: IProps) => {
  const { title, returnPath } = props;
  return (
    <Grid item xs={6}>
      <div className="full full-form">
        <img src={logoLogin} alt="Login" />
        <div className="login-form">
          <h1>{title}</h1>
          <TextField
            className="input-form"
            id="filled-basic"
            label="Código de acceso *"
            variant="filled"
            color="secondary"
          />
          <Button className="back-to" variant="outlined">
            <Link to={returnPath}>Regresar</Link>
          </Button>
          <Button className="btn-form" variant="contained">
            Continuar
          </Button>
          <div className="create-account">
            ¿No te llegó el código?{" "}
            <span
              className="purple-text"
              onClick={() => {
                console.log("hola");
              }}
            >
              Reenvía tu código
            </span>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default Form;
