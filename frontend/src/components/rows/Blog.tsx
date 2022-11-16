import "./Item.scss";
import parse from "html-react-parser";
import { Button, Grid } from "@mui/material";

interface IProps {
  title: string;
  description: string;
  image: string;
  link: string;
}
const Blog = (props: IProps) => {
  const { title, description, image, link } = props;
  return (
    <div className="itemsCarousel item-cause">
      <Grid container className="donor-items blog-items" spacing={2}>
        <Grid item xs={12}>
          <img src={image} alt={title} title={title} />
        </Grid>
        <Grid item xs={12}>
          <h4>{title}</h4>
        </Grid>
      </Grid>
      <div className="description_cause">{parse(description)}</div>
      <Grid className="actions" item xs={12}>
        <Button className="btn-form" variant="contained">
          <a href={link} target="_blank" rel="noreferrer">
            Lee el artículo
          </a>
        </Button>
      </Grid>
    </div>
  );
};

export default Blog;
