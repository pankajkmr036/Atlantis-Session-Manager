import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({});

const initialState = {};

const middleware = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middleware);

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(middlewareEnhancer),
);

export default store;
