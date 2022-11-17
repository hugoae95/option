import React from "react";
import { useDispatch } from "react-redux";
import {
  resetProducts,
  searchProducts,
} from "../store/actions/products.action";
export const useSearch = () => {
  const dispatch = useDispatch();
  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    if (value === "") {
      dispatch(resetProducts());
      return;
    }
    dispatch(searchProducts(value));
  };

  return {
    handleSearch,
  };
};
