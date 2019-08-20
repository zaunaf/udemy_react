import { USER_LOGIN_SUCCESS } from "./actions/actions";
import { requests } from "./agent";

export const tokenMiddleware = store => next => action => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            // Write to localStorage in browser
            window.localStorage.setItem('jwtToken', action.token);
            window.localStorage.setItem('id', action.id);
            window.localStorage.setItem('username', action.username);
            requests.setToken(action.token);
            console.log('From middleware', action.token);
            break;
        default:
            break;
    }
    next(action);
}