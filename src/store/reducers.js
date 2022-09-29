import { combineReducers } from '@reduxjs/toolkit';

export function createReducer(injectedReducers = {}) {
    if (Object.keys(injectedReducers).length === 0) {
        return {};
    } else {
        return combineReducers({
            ...injectedReducers,
        });
    }
}
