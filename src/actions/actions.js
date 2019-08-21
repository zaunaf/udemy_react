// File ini berisikan action beserta datanya
// Action adalah aksi perubahan data, yang
// kelak mentrigger fungsi2 reducers untuk mengubah state

// Import superagent's request for fetching data to backend 
import {requests} from "../agent";
import {SubmissionError} from "redux-form";

export const BLOG_POST_LIST_REQUEST = 'BLOG_POST_LIST_REQUEST';
export const BLOG_POST_LIST_RECEIVED = 'BLOG_POST_LIST_RECEIVED';
export const BLOG_POST_LIST_ERROR = 'BLOG_POST_LIST_ERROR';

export const BLOG_POST_REQUEST = 'BLOG_POST_REQUEST';
export const BLOG_POST_RECEIVED = 'BLOG_POST_RECEIVED';
export const BLOG_POST_ERROR = 'BLOG_POST_ERROR';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';

export const blogPostListRequest = () => ({
    type: BLOG_POST_LIST_REQUEST
});

export const blogPostListError = () => ({
    type: BLOG_POST_LIST_ERROR
});

export const blogPostListRecieved = (data) => ({
    type: BLOG_POST_LIST_RECEIVED,
    data
});

export const blogPostListFetch = () => {
    return (dispatch) => {
        dispatch(blogPostListRequest());
        return requests
            .get('/departments')
            .then(response => {
                dispatch(blogPostListRecieved(response));
            })
            .catch(error => dispatch(blogPostListError(error)));
    }
};

export const blogPostRequest = () => ({
    type: BLOG_POST_REQUEST
});

export const blogPostError = () => ({
    type: BLOG_POST_ERROR
});

export const blogPostRecieved = (data) => ({
    type: BLOG_POST_RECEIVED,
    data
});

export const blogPostFetch = (id) => {
    return (dispatch) => {
        dispatch(blogPostRequest());
        return requests
            .get(`/departments/${id}`)
            .then(response => {                
                dispatch(blogPostRecieved(response));
            })
            .catch(error => dispatch(blogPostError(error)));
    }
};

// Action ini akan menendang middleware
export const userLoginSuccess = (token, userId) => {
    return {
        type: USER_LOGIN_SUCCESS,
        token,
        userId
    }
};

// Action yg ditendang form untuk panggil ke backend API Platform
// Jika berhasil, nendang ke userLoginSuccess
export const userLoginAttempt = (username, password) => {
    return (dispatch) => {
        return requests
            .post('/login_check', {username, password})
            .then(response => dispatch(userLoginSuccess(response.token, response.userId)))
            .catch(error => {
                throw new SubmissionError({
                    _error: 'Username or password is invalid'
                })                
            });
    }
};



export const USER_PROFILE_REQUEST = 'USER_PROFILE_REQUEST';
export const USER_PROFILE_RECEIVED = 'USER_PROFILE_RECEIVED';
export const USER_PROFILE_ERROR = 'USER_PROFILE_ERROR';

// Dipanggil ketika userProfileFetch dimulai
export const userProfileRequest = () => {
    return {
        type: USER_PROFILE_REQUEST
    }
}

// Dipanggil ketika request userProfileFetch dapat jawaban dari server
export const userProfileReceived = (userId, userData) => {
    return {
        type: USER_PROFILE_RECEIVED,
        userId,
        userData
    }
}

// Dipanggil dari App.js
export const userProfileFetch = (userId) => {
    return (dispatch) => {
        console.log('UserProfileFetch kicked');
        
        // Kasih info bahwa sedang loading
        dispatch(userProfileRequest());
        return requests
            .get(`/userinfos/${userId}`, true)
            .then(response => dispatch(userProfileReceived(userId, response)))
            .catch(error => dispatch(userProfileError))
    }
};

// Dipanggil ketika error
export const userProfileError = () => {
    return {
        type: USER_PROFILE_ERROR
    }
}


export const USER_SET_ID = 'USER_SET_ID';

// Dipanggil ketika id berubah
export const userSetId = (userId) => {
    return {
        type: USER_SET_ID,
        userId
    }
}