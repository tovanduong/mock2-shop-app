import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postLogin } from '../../api/authApi';

const initialState = {
    login: '',
    status: '',
    loading: false,
    signUp: ''
}

export const fetchLogin = createAsyncThunk(
    "users/postLogin",
    async (payload) => {
        const response = await postLogin(payload)
        if (response.token) {
            const { token } = response
            localStorage.setItem('access_token', JSON.stringify(token))
        }

        return response
    }
);

export const AuthSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },

    extraReducers: {
        [fetchLogin.pending]: (state) => {
            state.status = 'loading';
            state.loading = true
        },

        [fetchLogin.fulfilled]: (state, action) => {
            state.status = 'success';
            console.log(action.payload)
            state.login = action.payload;
            state.loading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { } = AuthSlice.actions

export default AuthSlice.reducer