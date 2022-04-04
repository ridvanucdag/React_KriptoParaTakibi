import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const newsHeaders =  {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': 'd39d8673e6msh2997d50384a34dcp1df183jsndb69e8b8c8e7'
  }

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

  const createRequest =(url) => ({url, headers:newsHeaders})

  export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getNews: builder.query({
            query:({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const {useGetNewsQuery} = newsApi