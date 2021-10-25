import {takeEvery,put} from 'redux-saga/effects'
import { ASYNC_DECREMENT, ASYNC_INCREMENT, DECREMENT, INCREMENT } from './actions/actionTypes/increment'


export default function* counterWatcher () {
  yield  takeEvery(INCREMENT,inc)
  yield  takeEvery(DECREMENT,dec)
}

function* inc () {

    yield put({
        type:ASYNC_INCREMENT
    })
}
function* dec () {

    yield put({
        type:ASYNC_DECREMENT
    })
}

