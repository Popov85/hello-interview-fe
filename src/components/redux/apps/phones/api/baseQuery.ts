// Centralized baseQuery with automatic Basic Auth
import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// Read credentials from Vite environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_USERNAME = import.meta.env.VITE_API_USERNAME;
const API_PASSWORD = import.meta.env.VITE_API_PASSWORD;

// Function to generate Basic Auth header dynamically
const createBasicAuthHeader = () => {
    const username = API_USERNAME;
    const password = API_PASSWORD;
    return `Basic ${btoa(`${username}:${password}`)}`;
};

export const baseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
        headers.set("Authorization", createBasicAuthHeader()); // Attach Basic Auth header
        return headers;
    },
});