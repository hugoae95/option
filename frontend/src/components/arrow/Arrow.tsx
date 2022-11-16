import "./Arrow.scss";
import arrow from "./../../assets/svg/arrow.svg";
import { Grid } from "@mui/material";

const Arrow = () => {
  return (
    <Grid className="arrow" container alignItems="center">
      <Grid item xs={12}>
        <img src={arrow} alt="Bajar" />
      </Grid>
    </Grid>
  );
};

export default Arrow;
