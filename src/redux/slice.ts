import { createSlice } from '@reduxjs/toolkit';

const AdminSliceData = createSlice({
    name: 'user',
    initialState: {
        token: '',
    },
    reducers: {
        logout: (state) => {
            state.token = '';
        },
        login: (state, { payload }) => {
            state.token = payload.token;
            localStorage.setItem('token', payload.token);
        },
    },
});

export const { logout, login } = AdminSliceData.actions;

export default AdminSliceData.reducer;
