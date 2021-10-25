import {combineReducers } from 'redux'
import counterReducer from '../reducers/counterReducer'
import { postReducer } from './postReducer'


export const rootReducer =  combineReducers (
    {
        counterReducer,
        postReducer
        
    }
)