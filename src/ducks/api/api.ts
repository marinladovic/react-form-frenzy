import { baseQuery } from "@/ducks/endpoints/baseQuery"
import { createApi } from "@reduxjs/toolkit/dist/query/react"

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Users"],
  endpoints: () => ({}),
})
