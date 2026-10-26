import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "../types/Post";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery } = baseApi;
