import { all } from "redux-saga/effects";

import productSagaWatcher from "./products/sagas";

export default function* rootSaga() {
  yield all([productSagaWatcher()]);
}
