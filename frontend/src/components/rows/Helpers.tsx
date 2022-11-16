import "./Item.scss";
import { Grid } from "@mui/material";

interface IProps {
  title: string;
  image: string;
}

const Helpers = (props: IProps) => {
  const { title, image } = props;
  return (
    <div className="itemsCarouselHelpers">
      <Grid container spacing={2}>
        <Grid item xs={12} className="test-img">
          <img src={image} alt={title} title={title} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Helpers;
