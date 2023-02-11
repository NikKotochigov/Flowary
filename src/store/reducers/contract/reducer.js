import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    contract: undefined,
    admin: undefined
}

export const contractSlice = createSlice({
    name: 'contract',
    initialState,
    reducers: {
        setContract: (state, action) => {
            state.contract = action.payload
        },
        setAdmin: (state, action) => {
            state.admin = action.payload
        },
    },
})

export const { setContract, setAdmin } = contractSlice.actions

export const contractSelector = (state) => state.contract;

export default contractSlice.reducer
