import "./Item.scss";
import parse from "html-react-parser";
import { Grid } from "@mui/material";
import star from "./../../assets/svg/star.svg";
import colombia from "./../../assets/svg/colombia.svg";

interface IProps {
  id: string;
  title: string;
  description: string;
  image: string;
  job: string;
  stars: number;
}

const starRow = (title: string, i: number) => {
  return <img key={i} src={star} alt={title} title={title} />;
};

const startLoop = (title: string, stars: number) => {
  const rows = [];
  for (let i = 1; i <= stars; i++) {
    rows.push(starRow(title, i));
  }
  return rows;
};

const Testimonials = (props: IProps) => {
  const { id, title, description, image, job, stars } = props;
  return (
    <div className="itemsCarousel item-cause" key={id}>
      <Grid container className="donor-items" spacing={2}>
        <Grid item xs={3} className="test-img">
          <img src={image} alt={title} title={title} />
          <span className="country-org">
            <img src={colombia} alt={title} title={title} />
          </span>
        </Grid>
        <Grid item xs={9} className="test-caption">
          <h4>{title}</h4>
          <span>{job}</span>
        </Grid>
      </Grid>
      <div className="description_cause">{parse(description)}</div>
      <Grid container className="donor-items" spacing={2}>
        <Grid item xs={12}>
          <div className="actions-donors-now">
            <div className="icons-actions start-link">
              {startLoop(title, stars)}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Testimonials;
