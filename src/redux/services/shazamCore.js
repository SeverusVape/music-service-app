import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders: (headers) => {
            headers.set(
                "X-RapidAPI-Key",
                "fc5d245e92mshfc1326c191d7fc9p12c645jsnb76c18079fc2"
            );
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => "/charts/world" }),
    }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
