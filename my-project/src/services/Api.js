import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coursesapi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/courses' }),
  endpoints: (builder) => ({
    getallcourses: builder.query({
      query: () => ``,
    }),
    addcourses: builder.mutation({
      query: (newcourses) => ({
        url: ``,
        method: 'POST',
        body: newcourses,
      }),
    }),
  }),
});

export const { useGetallcoursesQuery, useAddcoursesMutation } = coursesapi;
