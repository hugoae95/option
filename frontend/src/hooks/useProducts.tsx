import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllProducts } from "../services/products.services";
import { updateProducts } from "../store/actions/products.action";
import { RootState } from "../store/store";

export const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.data);
  useEffect(() => {
    findAllProducts()
      .then((data) => {
        dispatch(updateProducts(data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [dispatch]);
  return { products };
};
