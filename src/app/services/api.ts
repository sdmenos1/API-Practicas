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
       getCharacterFilter: builder.query({
        query: ({page = 1, name, status, species}: {page?: number, name?: string, status?: string, species?: string})=>{
            let params = new URLSearchParams({page:String(page)});
            if (name) params.append('name', name);
            if (status) params.append('status', status);
            if (species) params.append('species', species);
            return `/character?${params.toString()}`;
        }
       })
    }),
})

export const {useGetCharactersQuery, useGetCharacterFilterQuery} = api