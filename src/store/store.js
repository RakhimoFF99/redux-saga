import {applyMiddleware, createStore} from 'redux'
import {rootReducer} from '../store/reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import sagaWatcher from './saga'
import { rootSaga } from './rootSaga'

const sagaMiddleware = createSagaMiddleware()


export const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)