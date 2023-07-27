import { RootState } from "../store";

export const getProducts = (state: RootState) => state.productState.products;
export const getProduct = (state: RootState) => state.productState.product;
