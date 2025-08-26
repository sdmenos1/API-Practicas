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
       getCharacterById:builder.query({
        query: (id: number) => `/character/${id}`,
       }),
    }),
})

export const {useGetCharactersQuery, useGetCharacterByIdQuery} = api