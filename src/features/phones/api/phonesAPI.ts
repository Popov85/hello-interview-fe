import { createApi} from "@reduxjs/toolkit/query/react";
import {Phone, PhonesResponse} from "../../../types/Phone.ts";
import {baseQuery} from "./baseQuery.ts";

export const phonesApi = createApi({
  reducerPath: "phonesApi",
  baseQuery: baseQuery,
  tagTypes: ['Phones'], // <---- declare your tagTypes before you use them
  endpoints: (builder) => ({
    // 📌 Get paginated phones list
    getPhones: builder.query<PhonesResponse, { page: number; size: number }>({
      query: ({ page, size }) => `phones?page=${page}&size=${size}&sort=brand,asc`,
      providesTags: ['Phones'], // ✅ Tags the cached phones list
    }),

    // 📌 Get a phone by ID
    getPhoneById: builder.query<Phone, number>({
      query: (id) => `phones/${id}`,
    }),

    // 📌 Insert a new phone
    savePhone: builder.mutation<Phone, Partial<Phone>>({
      query: (newPhone) => ({
        url: "phones",
        method: "POST",
        body: newPhone,
      }),
      invalidatesTags: ['Phones'], // ✅ Invalidates phones list cache after insert
    }),

    // 📌 Delete a phone by ID
    deletePhone: builder.mutation<void, number>({
      query: (id) => ({
        url: `phones/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Phones'], // ✅ Invalidates phones list cache after insert
    }),

  }),
});

export const {
  useGetPhonesQuery,
  useGetPhoneByIdQuery,
  useSavePhoneMutation,
  useDeletePhoneMutation,
} = phonesApi;
