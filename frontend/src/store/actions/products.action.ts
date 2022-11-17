import { RESET_PRODUCTS, SEARCH_PRODUCTS, UPDATE_PRODUCTS } from "../../constants/products";
import { IProduct } from "../../types/products.types";

export const updateProducts = (data: IProduct[]) => {
    return { type: UPDATE_PRODUCTS, data };
};

export const resetProducts = () => {
    return { type: RESET_PRODUCTS };
}
  
export const searchProducts = (value: string) => {
    return { type: SEARCH_PRODUCTS, data: value };
}