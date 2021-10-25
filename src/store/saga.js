import {takeEvery,put,call} from 'redux-saga/effects'
import { FETCH_POST, REQUEST_POST } from './actions/actionTypes/increment'



export default function* sagaWatcher () {
   yield takeEvery(REQUEST_POST,sagaWorker)
}

function* sagaWorker () {

    const data =  yield call(fetchPost) 
    yield put({type:FETCH_POST ,payload:data})

}


 async function fetchPost () {
    const response  = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json()
}