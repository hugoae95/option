import { Button, Grid } from "@mui/material";
import parse from "html-react-parser";
import logoLogin from "./../../../../assets/svg/logoLogin.svg";
import { Link } from "react-router-dom";
import "./Form.scss";

const mail = "hugo@gmail.com";
const text =
  "<p>Enviamos un código de acceso a tu correo electrónico <span class='purple-text'>" +
  mail +
  "</span>. Este código lo usamos para estar seguros de que eres tú.</p>";

const Form = () => {
  return (
    <Grid item xs={6}>
      <div className="full full-form">
        <img src={logoLogin} alt="Login" />
        <div className="login-form">
          <h1>Revisa tu email</h1>
          {parse(text)}
          <Button className="back-to" variant="outlined">
            <Link to="/login">Regresar</Link>
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
