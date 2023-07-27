import { Product } from "@/types/product";
import { ActionType, createAction } from "typesafe-actions";

export const productActions = {
  getProducts: createAction("products/GET_PRODUCTS")(),
  setProducts: createAction("products/SET_PRODUCTS")<Product[]>(),
  getProduct: createAction("products/GET_PRODUCT")<string>(),
  setProduct: createAction("products/SET_PRODUCT")<Product>(),
};

export type ProductActions = ActionType<typeof productActions>;
