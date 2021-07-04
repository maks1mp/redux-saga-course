import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const initial = {};

export function appReducer(state = initial, action) {
    return state;
}

const rootReducer = combineReducers({
    app: appReducer,
    router: connectRouter(history),
})

export default rootReducer;