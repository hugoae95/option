import { RESET_PRODUCTS, SEARCH_PRODUCTS, UPDATE_PRODUCTS } from "../../constants/products";
import { IProduct, IProductAction, IProductReducer } from "../../types/products.types";

const initialState:IProductReducer = {
    allData : [],
    data: []

};
  
export const productsReducer = (state = initialState, action: IProductAction) =>{
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {
                ...state,
                allData: action.data,
                data: action.data
            };
        case SEARCH_PRODUCTS:
            const filter = state.allData.filter((product: IProduct) => product.title.toLowerCase().includes(action.data.toLowerCase()));
            return {
                ...state,
                data: filter
            }
        case RESET_PRODUCTS:
            return {
                ...state,
                data: state.allData
            }
        default:
            return state;
    }
}