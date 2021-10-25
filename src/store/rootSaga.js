import {all} from 'redux-saga/effects'
import counterWatcher from './counterSaga'
import sagaWatcher from './saga'
export function* rootSaga () {
    yield all ([counterWatcher(),sagaWatcher()])
}