import "./Item.scss";
import parse from "html-react-parser";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  description: string;
  image: string;
  foundation: string;
  image_foundation: string;
  donors: string;
}
const Cause = (props: IProps) => {
  const { title, description, image, foundation, donors, image_foundation } =
    props;
  return (
    <div className="itemsCarousel item-cause">
      <img src={image} alt={title} title={title} />
      <h4>{title}</h4>
      <div className="image_foundation">
        <img src={image_foundation} alt={title} title={title} />
      </div>
      <div className="description_cause">{parse(description)}</div>
      <Grid container className="donor-items" spacing={2}>
        <Grid item xs={8}>
          <div className="capita-cause">
            <b>{donors}</b>
          </div>
          <span>donantes</span>
        </Grid>
        <Grid item xs={4}>
          <div className="actions-donors-now">
            <div className="icons-actions like-donors">
              <span>23</span>
            </div>
            <div className="icons-actions shared-donors"></div>
          </div>
        </Grid>
      </Grid>
      <Grid className="actions" item xs={12}>
        <Button className="back-to" variant="outlined">
          <Link to="/">Ver más</Link>
        </Button>
        <Button className="btn-form" variant="contained">
          <Link to="/">Ayuda</Link>
        </Button>
      </Grid>
    </div>
  );
};

export default Cause;
