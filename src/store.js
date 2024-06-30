
import { createStore } from 'redux'
import rootreduce from './Services/Studant_Reducer/index'

export const store = createStore(rootreduce, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())