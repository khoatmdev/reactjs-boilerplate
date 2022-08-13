import { createSlice } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { postsSaga } from './saga';

export const initialState = {
    loading: false,
    listPost: [],
    error: null,
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        fetchPost: state => {
            state.loading = true;
        },
        fetchPostSuccess: (state, action) => {
            state.loading = false;
            console.log(action.payload);
            state.listPost = action.payload;
        },
        fetchPostFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchPost, fetchPostSuccess, fetchPostFailure } =
    postSlice.actions;

export const usePostSlice = () => {
    useInjectReducer({
        key: postSlice.name,
        reducer: postSlice.reducer,
    });
    useInjectSaga({ key: postSlice.name, saga: postsSaga });
    return { actions: postSlice.actions };
};
