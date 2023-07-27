import { Product, Category, ProductState } from "@/types/product";
import { getType } from "typesafe-actions";
import { ProductActions, productActions } from "./actions";
import { produce } from "immer";

export const initialState: ProductState = {
  products: [
    {
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: Category.Electronics,
      image: "",
      rating: {
        rate: 0,
        count: 0,
      },
    },
  ],
  product: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: Category.Electronics,
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  },
};

const productReducer = (state = initialState, action: ProductActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(productActions.setProducts): {
        const products: Product[] = action.payload;
        draft.products = products;
        return;
      }
      case getType(productActions.setProduct): {
        const product: Product = action.payload;
        draft.product = product;
        return;
      }
      default:
        return state;
    }
  });

export default productReducer;
