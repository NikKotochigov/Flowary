import { configureStore } from '@reduxjs/toolkit'
import walletReducer from './reducers/wallet/reducer'

export const store = configureStore({
    reducer: {
        wallet: walletReducer
    },
})
