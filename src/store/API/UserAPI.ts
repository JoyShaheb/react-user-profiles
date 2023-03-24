import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserAPI = createApi({
  reducerPath: "UserAPI",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyapi.io/data/v1/",
    prepareHeaders: (headers) => {
      headers.set("app-id", import.meta.env.VITE_DUMMY_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `/user`,
      providesTags: ['Users'],
    }),
    getOneUser: builder.query({
      query: (id) => `/user/${id}`,
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetOneUserQuery,
  useDeleteUserMutation,
} = UserAPI;
