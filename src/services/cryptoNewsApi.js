import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const cryptoNewsHeaders =  {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '4f83cba677mshad0eb34f5e94d96p1b8124jsn0c195df0aa1b',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }


  const baseUrl = "https://bing-news-search1.p.rapidapi.com";

  const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

  export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
    }),
  });

export const {useGetCryptoNewsQuery} = cryptoNewsApi

// const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// export const cryptoNewsApi = createApi({
//   reducerPath: 'cryptoNewsApi',
//   baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
//   endpoints: (builder) => ({
//     getCryptoNews: builder.query({
//       query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
//     }),
//   }),
// });

// export const { useGetCryptoNewsQuery } = cryptoNewsApi;
