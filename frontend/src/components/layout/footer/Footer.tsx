import "./Footer.scss";
import { Button, Grid } from "@mui/material";
import whatsapp from "./../../../assets/svg/whatsapp.svg";
import help from "./../../../assets/svg/footer/help.svg";
import book from "./../../../assets/svg/footer/book.svg";
import facebook from "./../../../assets/svg/social/facebook.svg";
import twitter from "./../../../assets/svg/social/twitter.svg";
import instagram from "./../../../assets/svg/social/instagram.svg";
import linked from "./../../../assets/svg/social/linked.svg";

export const Footer = () => {
  return (
    <footer>
      <Grid className="footer container" container>
        <Grid item xs={6}>
          <span>© 2022 wehehe. All rights reserved.</span>
        </Grid>
        <Grid className="actions" item xs={6}>
          <div className="social-media">
            Redes sociales
            <div className="social-media-up">
              <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                <img src={instagram} alt="instagram" />
              </a>
              <a
                href="https://co.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linked} alt="linked" />
              </a>
            </div>
          </div>
          <Button>
            <img src={help} alt="help" />
          </Button>
          <Button>
            <img src={book} alt="book" />
          </Button>
          <Button>
            <img src={whatsapp} alt="Whatsapp" />
          </Button>
        </Grid>
      </Grid>
    </footer>
  );
};
