import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from 'rootReducer';

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

const store = createStore(rootReducer, undefined, composedEnhancer);

export default store;