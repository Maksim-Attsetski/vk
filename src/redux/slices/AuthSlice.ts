import {createSlice} from "@reduxjs/toolkit";

interface IInitialState {
    auth: boolean
}

const initialState: IInitialState = {
    auth: !!localStorage.getItem('auth')
}
const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login: (state) => {
            localStorage.setItem('auth', 'true')
            state.auth = true
        },
        logout: (state) => {
            localStorage.removeItem('auth')
            state.auth = false
        },
    }
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer