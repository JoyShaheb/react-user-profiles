import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  UserAPI,
  useGetAllUsersQuery,
  useGetOneUserQuery,
  useDeleteUserMutation,
} from "./API/UserAPI";

export const store = configureStore({
  reducer: {
    [UserAPI.reducerPath]: UserAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UserAPI.middleware),
});

setupListeners(store.dispatch);

export { useGetAllUsersQuery, useGetOneUserQuery, useDeleteUserMutation };
