import { Button, Grid, TextField } from "@mui/material";
import logoLogin from "./../../../../assets/svg/logoLogin.svg";
import "./Form.scss";

const Form = () => {
  return (
    <Grid item className="register-item" xs={6}>
      <div className="full full-form">
        <img src={logoLogin} alt="Login" />
        <div className="login-form">
          <h1>Completa tu registro</h1>
          <div className="register-form">
            <Grid container spacing={2}>
              <Grid item className="register-item" xs={6}>
                <TextField
                  className="input-form"
                  id="filled-basic"
                  label="Nombre *"
                  variant="filled"
                  color="secondary"
                />
              </Grid>
              <Grid item className="register-item" xs={6}>
                <TextField
                  className="input-form"
                  id="filled-basic"
                  label="Apellido *"
                  variant="filled"
                  color="secondary"
                />
              </Grid>
              <Grid item className="register-item" xs={3}>
                <TextField
                  className="input-form"
                  id="filled-basic"
                  label="Pais *"
                  variant="filled"
                  color="secondary"
                />
              </Grid>
              <Grid item className="register-item" xs={9}>
                <TextField
                  className="input-form"
                  id="filled-basic"
                  label="Celular *"
                  variant="filled"
                  color="secondary"
                />
              </Grid>
              <Grid item className="register-item" xs={6}>
                <TextField
                  className="input-form"
                  id="filled-basic"
                  label="Género *"
                  variant="filled"
                  color="secondary"
                />
              </Grid>
              <Grid item className="register-item" xs={6}>
                <TextField
                  className="input-form"
                  id="filled-basic"
                  label="Fecha de nacimiento *"
                  variant="filled"
                  color="secondary"
                />
              </Grid>
              <Grid item className="register-item" xs={12}>
                <TextField
                  className="input-form"
                  id="filled-basic"
                  label="País *"
                  variant="filled"
                  color="secondary"
                />
              </Grid>
            </Grid>
          </div>
          <Button className="btn-form" variant="contained">
            Continuar
          </Button>
        </div>
      </div>
    </Grid>
  );
};

export default Form;
