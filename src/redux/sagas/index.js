import {takeEvery, put, call, fork, spawn, join, select} from 'redux-saga/effects';

async function swapiGet(pattern) {
    const request = await fetch(`http://swapi.dev/api/${pattern}`);

    const data = await request.json();

    return data;
}

export function* loadPeople() {
    const people = yield call(swapiGet, 'people');

    yield put({type: 'SET_PEOPLE', payload: people.results});
    console.log('load people!');

    return people;
}

export function* loadPlanets() {
    const planets = yield call(swapiGet, 'planets');

    yield put({type: 'SET_PLANETS', payload: planets.results});
    console.log('load planets!');
}

export function* workerSaga() {
    console.log('run parallel tasks');
    yield call(loadPeople);
    yield fork(loadPlanets);

    const store = yield select(s => s);
    console.log('finish parallel tasks', store);
}

export function* watchLoadDataSaga() {
    yield takeEvery('LOAD_DATA', workerSaga);
}

export default function* rootSaga() {
    yield fork(watchLoadDataSaga);
}