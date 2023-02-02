import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    connected: false,
    account: null
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setConnected: (state, action) => {
            state.connected = action.payload
        },
        setAccount: (state, action) => {
            state.account = action.payload
        },
    },
})

export const { setConnected, setAccount } = walletSlice.actions

export default walletSlice.reducer
