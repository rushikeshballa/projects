

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const crmApi = createApi({
  reducerPath: 'crmApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7777/' }),
  endpoints: (builder) => ({

    signup: builder.mutation({
      query: (User) => ({
        url:`signUP`,
         method:`POST`,
         body:User,
      }),
    }),

      login: builder.mutation({
        query: (User) => ({
          url:`/login`,
           method:`POST`,
           body:User,
        })
      }),
  }),
})



export const { useSignupMutation, useLoginMutation  } =crmApi