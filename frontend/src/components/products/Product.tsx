import "./Product.scss";
import parse from "html-react-parser";
import { Grid } from "@mui/material";
import { IProduct } from "../../types/products.types";

interface IProps {
  product: IProduct;
}
export const Product = (props: IProps) => {
  const { id, title, image, sku, price, barcode, description } = props.product;
  return (
    <div key={id} className="itemsCarousel item-cause">
      <Grid container className="donor-items blog-items" spacing={2}>
        <Grid item xs={12}>
          <img src={image} alt={title} title={title} />
        </Grid>
        <Grid item xs={12}>
          <h4>{title}</h4>
        </Grid>
      </Grid>
      <div className="description_cause">{parse(description)}</div>
      <div className="price_cause">Price: {price}</div>
    </div>
  );
};
