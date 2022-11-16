import "./Item.scss";
import parse from "html-react-parser";
import { Grid } from "@mui/material";
import linked from "./../../assets/svg/link.svg";
import colombia from "./../../assets/svg/colombia.svg";

interface IProps {
  title: string;
  description: string;
  image: string;
  type: string;
  link: string;
  causes: string;
}
const Organization = (props: IProps) => {
  const { title, description, image, link, causes, type } = props;
  return (
    <div className="itemsCarousel item-cause">
      <div className="content-tag-e">
        <span>{type}</span>
      </div>
      <Grid container className="donor-items" spacing={2}>
        <Grid item xs={4}>
          <img src={image} alt={title} title={title} />
        </Grid>
        <Grid item xs={8}>
          <h4>{title}</h4>
        </Grid>
      </Grid>
      <div className="description_cause">{parse(description)}</div>
      <Grid container className="donor-items" spacing={2}>
        <Grid className="subt-causes" item xs={8}>
          <span className="country-org">
            <img src={colombia} alt={title} title={title} />
          </span>
          <span>{causes} causas</span>
        </Grid>
        <Grid item xs={4}>
          <div className="actions-donors-now">
            <div className="icons-actions shared-link">
              <a href={link} target="_blank" rel="noreferrer">
                <img src={linked} alt={title} title={title} />
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Organization;
