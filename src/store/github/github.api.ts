import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser, IUserDetails, ServerResponse } from "types/IUser";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  endpoints: (builder) => ({
    searchUsers: builder.query<IUser[], string>({
      query: (search: string) => ({
        url: `search/users`,
        params: {
          q: search,
          per_page: 25,
        },
      }),
      transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
    getUserDetails: builder.query<IUserDetails, string>({
      query: (username: string) => `users/${username}`,
    }),
  }),
});

export const { useSearchUsersQuery, useGetUserDetailsQuery } = githubApi;
