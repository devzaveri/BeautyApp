import { createStore, combineReducers } from 'redux';
import itemReducer from '../reducer/reducer';


const rootReducer = combineReducers({
  items: itemReducer,
});

const store = createStore(rootReducer);

export default store;