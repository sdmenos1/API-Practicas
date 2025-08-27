import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiComment = createApi({
  reducerPath: "apiComment",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL_JSON,
  }),
  endpoints: (builder) => ({
    getComment: builder.query({
      query: () => "/comments",
    }),
    addComment: builder.mutation({
      query: (data: any) => ({
        url: "/comments",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useGetCommentQuery, useAddCommentMutation } = apiComment;
