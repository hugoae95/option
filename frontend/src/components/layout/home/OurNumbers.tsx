import React from "react";
import "./OurNumbers.scss";
import more from "./../../../assets/svg/more.svg";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const OurNumbers = () => {
  return (
    <div className="all-purple">
      <h2>Nuestros números</h2>
      <div className="container">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className="card-numbers">
              <div className="numbers">100</div>
              <span>organizaciones</span>
              <div>
                <Link to="/">
                  <img src={more} alt="more" />
                </Link>
              </div>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div className="card-numbers center-card">
              <div className="numbers">500</div>
              <span>causas</span>
              <div>
                <Link to="/">
                  <img src={more} alt="more" />
                </Link>
              </div>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div className="card-numbers">
              <div className="numbers">1000</div>
              <span>usuarios</span>
              <div>
                <Link to="/">
                  <img src={more} alt="more" />
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default OurNumbers;
