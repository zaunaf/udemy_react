// File ini berisikan action beserta datanya
// Action adalah aksi perubahan data, yang
// kelak mentrigger fungsi2 reducers untuk mengubah state

// Import superagent's request for fetching data to backend 
import {requests} from "../agent";

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

export const userLoginSuccess = (token, id, username) => {
    return {
        type: USER_LOGIN_SUCCESS,
        token,
        id,
        username
    }
};

export const userLoginAttempt = (username, password) => {
    return (dispatch) => {
        return requests
            .post('/login_check', {username, password})
            .then(response => dispatch(userLoginSuccess(response.token, response.id, response.username)))
            .catch(error => {
                console.log('Login failed');
            })

    }
};

