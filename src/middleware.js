import { USER_LOGIN_SUCCESS } from "./actions/actions";
import { requests } from "./agent";

// Middleware menangkap aksi dari actions login success
// Tujuannya untuk menyimpan token ke localStorage
export const tokenMiddleware = store => next => action => {

    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            // Write to localStorage in browser
            window.localStorage.setItem('jwtToken', action.token);
            window.localStorage.setItem('id', action.id);
            window.localStorage.setItem('username', action.username);
            
            // Ini nendang balik ke agent 
            // agar semua request setelah ini nendang dengan header auth
            requests.setToken(action.token);
            // console.log('From middleware', action.token);
            break;
        default:
            break;
    }
    // Ini gak boleh lupa atau nanti form nge-freeze
    next(action);
}