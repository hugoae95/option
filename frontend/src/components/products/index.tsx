import { Grid } from "@mui/material";
import { IProduct } from "../../types/products.types";
import { Product } from "./Product";

interface IProps {
  products: IProduct[];
}

export const Products = (props: IProps) => {
  const { products } = props;
  return (
    <Grid container>
      {products.length > 0 ? (
        products.map((product: IProduct, index: number) => {
          return (
            <Grid id={"product-" + index} item lg={3} xs={12} key={index}>
              <Product product={product} />
            </Grid>
          );
        })
      ) : (
        <Grid item xs={12}>
          No se encuentran productos en el momento.
        </Grid>
      )}
    </Grid>
  );
};
