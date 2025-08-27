import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL
    }),
    endpoints: (builder) => ({
       getCharacters:builder.query({
        query: () => '/character',
       }),
       getCharacterByPage:builder.query({
        query: (page: number) => `/character?page=${page}`,
       }),
    }),
})

export const {useGetCharactersQuery, useGetCharacterByPageQuery} = api