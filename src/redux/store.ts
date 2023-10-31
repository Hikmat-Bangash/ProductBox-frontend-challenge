import { configureStore } from '@reduxjs/toolkit'
import ItemReducer from "./features/ItemSlice";

export const store = configureStore({
    reducer: {
        Items: ItemReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch