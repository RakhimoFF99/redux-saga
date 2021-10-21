import {combineReducers } from 'redux'
import counterReducer from '../reducers/counterReducer'


export const rootReducer =  combineReducers (
    {
        counterReducer
    }
)