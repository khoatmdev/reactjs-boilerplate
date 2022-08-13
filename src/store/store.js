import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createInjectorsEnhancer } from 'redux-injectors';

import { createReducer } from './reducers';

const sagaMiddleware = createSagaMiddleware();
const { run: runSaga } = sagaMiddleware;
const enhancers = [
    createInjectorsEnhancer({
        createReducer,
        runSaga,
    }),
];

const store = configureStore({
    reducer: createReducer(),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(sagaMiddleware),
    enhancers,
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
