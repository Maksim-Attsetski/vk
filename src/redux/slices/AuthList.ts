import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../types/global-types";

interface IState {
    userList: IUser[],
    authUser: IUser,
}

const initialState: IState = {
    userList: [],
    authUser: {
        id: 0,
        customID: '',
        createdAt: '',
        firstName: '',
        lastName: '',
        email: '',
        pass: '',
        friends: [], music: [], posts: [], video: [],
    },
}

const AuthList = createSlice({
    name: 'signupSlice',
    initialState,
    reducers: {
        setUser: (state) => {
            const authListData = localStorage.getItem('authList')
            const authUserData = localStorage.getItem('authUser')

            if (authListData && authUserData) {
                state.userList = JSON.parse(authListData)
                state.authUser = JSON.parse(authUserData)
            }
        },
        signUp: (state, action) => {
            state.userList.push(action.payload)
            state.authUser = action.payload

            localStorage.setItem('authList', JSON.stringify(state.userList))
            localStorage.setItem('authUser', JSON.stringify(state.authUser))
        },
        logIn: (state, action) => {
            const user: IUser[] = [...state.userList].filter((user: IUser) => {
                if (action.payload.pass === user.pass && user.email === action.payload.email) {
                    return user
                }
            })

            if (user.length === 1) state.authUser = user[0]
            localStorage.setItem('authUser', JSON.stringify(state.authUser))
        },
        changeAuthUser: (state, action) => {
            state.authUser = action.payload
            localStorage.setItem('authUser', JSON.stringify(state.authUser))

            const changedUserList = [...state.userList].map((user: IUser) => (user.id === state.authUser.id) ? state.authUser : user)
            state.userList = changedUserList
            localStorage.setItem('authList', JSON.stringify(changedUserList))
        },
    },
})

export const authListReducer = AuthList.reducer
export const authListActions = AuthList.actions