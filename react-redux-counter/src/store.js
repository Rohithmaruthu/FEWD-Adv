import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

// Reducer 1 — counter
function counterReducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        case 'RESET': return 0;
        default: return state;
    }
}

// Reducer 2 — user
function userReducer(state = { name: '' }, action) {
    switch (action.type) {
        case 'SET_NAME': return { name: action.payload };
        default: return state;
    }
}

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
});

// applyMiddleware(thunk) — enables dispatching functions
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;