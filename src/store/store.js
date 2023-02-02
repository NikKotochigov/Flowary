import { configureStore } from '@reduxjs/toolkit'
import { walletSlice } from './reducers/wallet/reducer'

export const store = configureStore({
    reducer: {
        wallet: walletSlice
    },
})
