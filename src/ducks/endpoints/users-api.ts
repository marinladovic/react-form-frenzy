import { api } from "@/ducks/api/api"

import { UsersType } from "@/types/user"

const USERS_BASE_URL = "https://jsonplaceholder.typicode.com/users"

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<UsersType, void>({
      query: () => USERS_BASE_URL,
    }),
  }),
})

export const { useGetAllUsersQuery } = usersApi
