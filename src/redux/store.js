import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import amiiboReducer from './amiibo';

const reducer = combineReducers({
    items: amiiboReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export default function generateStore(){
const store = createStore( reducer, composeEnhancers( applyMiddleware(thunk)))
return store;
}