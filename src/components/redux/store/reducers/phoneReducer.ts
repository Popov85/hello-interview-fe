// features/someSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {Phone} from "../../apps/phones/types/Phone.ts";

// Define the state type
interface PhoneState {
    phone: Phone | null
}

// Create a slice
const phoneSlice = createSlice({
    name: "phoneReducer",
    initialState : {phone: null},
    reducers: {
        // Set a specific value
        setPhone: (state: PhoneState, action: PayloadAction<Phone>) => {
            state.phone = action.payload
        },
        // Set a specific value
        resetPhone: (state: PhoneState) => {
            state.phone = null
        },
    },
})

// Export actions
export const { setPhone, resetPhone } = phoneSlice.actions

// Export reducer
export default phoneSlice.reducer