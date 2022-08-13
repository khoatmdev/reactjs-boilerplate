import { combineReducers } from '@reduxjs/toolkit';

export function createReducer(injectedReducers = {}) {
    return combineReducers({
        ...injectedReducers,
    });
}
