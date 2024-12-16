import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const coursesapi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({ baseUrl:  'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getallcourses: builder.query({
      query: (name) => `courses`,
    }),
    addcourses: builder.mutation({
      query: (newcourses) =>{
        return{
          url:`/courses`,
          method:'POST',
          body:newcourses
        }
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetallcoursesQuery ,
  useAddcoursesMutation
} = coursesapi