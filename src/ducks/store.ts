import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import productReducer from "./products/reducer";
import reduxSaga from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = reduxSaga();
const middleware = [sagaMiddleware];

export const rootReducer = combineReducers({
  productState: productReducer,
  //   users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const composeEnhancers =
  ((window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;

sagaMiddleware.run(rootSaga);
