import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchPost, fetchPostFailure, fetchPostSuccess } from '.';
import { getPost } from '@/services/exampleService';

function* getPosts() {
    try {
        const data = yield call(getPost);
        yield put(fetchPostSuccess(data));
    } catch (error) {
        yield put(fetchPostFailure(error));
    }
}

export function* postsSaga() {
    yield takeLatest(fetchPost.type, getPosts);
}
