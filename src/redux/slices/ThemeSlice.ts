import {createSlice} from "@reduxjs/toolkit";

interface IInitialState {
    darkMode: boolean
}

const initialState: IInitialState = {
    darkMode: false
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        setCurrentTheme: (state): void => {
            const theme = JSON.parse(localStorage.getItem('darkMode') || 'false')
            if (!theme) return

            document.body.classList.add('darkMode')
            state.darkMode = true
        },
        toggleTheme: (state): void => {
            if (state.darkMode) {
                localStorage.setItem('darkMode', 'false')
                document.body.classList.remove('darkMode')
            } else {
                document.body.classList.add('darkMode')
                localStorage.setItem('darkMode', 'true')
            }

            state.darkMode = !state.darkMode
        }
    }
})

export const themeReducer = themeSlice.reducer;
export const themeActions = themeSlice.actions;