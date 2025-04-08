import { configureStore } from "@reduxjs/toolkit"
import rtkReducer from "../components/redux/apps/experiment/rtkReducer.ts";
import {phonesApi} from "../features/phones/api/phonesAPI.ts";
import phoneReducer from "../features/phones/reducers/phoneReducer.ts";

export const store = configureStore({
    reducer: {
        [phonesApi.reducerPath]: phonesApi.reducer,
        rtkReducer: rtkReducer, // Define your slices here
        phoneReducer: phoneReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(phonesApi.middleware),
});


// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch