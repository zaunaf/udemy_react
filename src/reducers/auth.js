import { USER_LOGIN_SUCCESS, USER_PROFILE_RECEIVED, USER_SET_ID } from "../actions/actions";

export default (state = {
    token: null,
    userId: null,
    userData: null,
    isAuthenticated: false    
}, action) => {

    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                isAuthenticated: true
            };
        case USER_PROFILE_RECEIVED:
            // console.log(action.userData);
            return {
                ...state,
                // update the state userData only if user id of the state equals from the action and user data is null. Otherwise keep the old one
                userData: (state.userId === action.userId) && (state.userData === null) ? action.userData : state.userData,
                isAuthenticated: (state.userId === action.userId) && (state.userData === null)
            }
        case USER_SET_ID:
            return {
                ...state,
                userId: action.userId
            }
        default:
            return state;
    }
}

