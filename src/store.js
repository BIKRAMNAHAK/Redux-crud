
import { applyMiddleware, compose, createStore } from 'redux'
import rootreduce from './Services/Studant_Reducer/index'
import { thunk } from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootreduce,composeEnhancers(applyMiddleware(thunk)))