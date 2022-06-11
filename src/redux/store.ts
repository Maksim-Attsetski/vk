import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {themeReducer} from "./slices/ThemeSlice";
import {authReducer} from "./slices/AuthSlice";
import {authListReducer} from "./slices/AuthList";

export const rootReducer = combineReducers({
    theme: themeReducer,
    auth: authReducer,
    authList: authListReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>
export type storeType = typeof store;
export type dispatchType = storeType['dispatch']