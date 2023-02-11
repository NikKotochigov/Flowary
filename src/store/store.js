import { configureStore } from '@reduxjs/toolkit'
import walletReducer from './reducers/wallet/reducer'
import contractReducer from './reducers/contract/reducer'

export const store = configureStore({
    reducer: {
        wallet: walletReducer,
        contract: contractReducer
    },

})
