import { api } from "@/ducks/api/api"

import { UsersType, UserType } from "@/types/user"

const USERS_BASE_URL = "https://jsonplaceholder.typicode.com/users"

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<UsersType, void>({
      query: () => USERS_BASE_URL,
    }),
    getUserById: builder.query<UserType, string>({
      query: (id) => `${USERS_BASE_URL}/${id}`,
    }),
  }),
})

export const { useGetAllUsersQuery, useGetUserByIdQuery } = usersApi
