import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '.';

const selectPost = state => {
    return state.post || initialState;
};

export const selectListPost = createSelector(
    [selectPost],
    postState => postState.listPost,
);

export const selectLoading = createSelector(
    [selectPost],
    postState => postState.loading,
);
