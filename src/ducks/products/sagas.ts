import { AxiosResponse } from "axios";
import { call, all, put, takeLatest, takeEvery } from "redux-saga/effects";
import { productActions } from "./actions";
import { ActionType, getType } from "typesafe-actions";
import { Product } from "@/types/product";
import services from "@/services/services";

function* getProducts() {
  try {
    const products: AxiosResponse<Product[]> = yield call(services.getProducts);
    yield put(productActions.setProducts(products.data));
  } catch (error) {
    console.log(error);
  }
}

export function* getProduct(
  action: ActionType<typeof productActions.getProduct>
) {
  try {
    const product: AxiosResponse<Product> = yield call(
      services.getProduct,
      action.payload
    );
    yield put(productActions.setProduct(product.data));
  } catch (error) {
    console.log(error);
  }
}

function* productSagaWatcher() {
  yield all([
    takeLatest(getType(productActions.getProducts), getProducts),
    takeEvery(getType(productActions.getProduct), getProduct),
  ]);
}

export default productSagaWatcher;
