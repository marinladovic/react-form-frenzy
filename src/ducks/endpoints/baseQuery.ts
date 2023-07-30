import { fetchBaseQuery } from "@reduxjs/toolkit/query"

// here we define the baseQuery to use for all endpoints in the app
// and can add common headers, error handlers, bearers tokens etc
export const baseQuery = fetchBaseQuery({})
