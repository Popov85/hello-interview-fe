// features/someSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// Define the state type
interface SomeState {
    name: string
    value: number
}

// Create a slice
const someSlice = createSlice({
    name: "rtkReducer",
    initialState : {name:"Andrii", value: 0},
    reducers: {
        // Increment action
        increment: (state: SomeState) => {
            state.value += 1
        },
        // Decrement action
        decrement: (state: SomeState) => {
            state.value -= 1
        },
        // Set a specific value
        setValue: (state: SomeState, action: PayloadAction<number>) => {
            state.value = action.payload
        },
        // Change the name
        setName: (state: SomeState, action: PayloadAction<string>) => {
            state.name = action.payload
        },
    },
})

// Export actions
export const { increment, decrement, setValue, setName } = someSlice.actions

// Export reducer
export default someSlice.reducer