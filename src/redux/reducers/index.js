import {combineReducers} from 'redux'

import countReducer from './countReducer'
import todoReducer from './todoReducer'

const reducers = combineReducers({
    count:countReducer,
    todo:todoReducer
})


export default reducers