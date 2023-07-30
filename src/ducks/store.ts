import { api } from "@/ducks/api/api"
import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import reduxSaga from "redux-saga"

import productReducer from "./products/reducer"
import rootSaga from "./rootSaga"

const sagaMiddleware = reduxSaga()

const store = configureStore({
  reducer: {
    productState: productReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([api.middleware, sagaMiddleware]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
sagaMiddleware.run(rootSaga)
