import { configureStore } from '@reduxjs/toolkit'
import ItemReducer from "./features/ItemSlice";
import ShippingDetailReducer from './features/ShippingDetail.Slice';
export const store = configureStore({
    reducer: {
        Items: ItemReducer,
        shippingDetail: ShippingDetailReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch