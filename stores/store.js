import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from '../reducers/reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const rootReducer = combineReducers(reducers);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
