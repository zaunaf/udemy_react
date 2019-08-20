// File ini berisikan action beserta datanya
// Action adalah aksi perubahan data, yang
// kelak mentrigger fungsi2 reducers untuk mengubah state

// Import superagent's request for fetching data to backend 
import {requests} from "../agent";

export const BLOG_POST_LIST_REQUEST = 'BLOG_POST_LIST_REQUEST';
export const BLOG_POST_LIST_RECEIVED = 'BLOG_POST_LIST_RECEIVED';
export const BLOG_POST_LIST_ERROR = 'BLOG_POST_LIST_ERROR';
export const BLOG_POST_LIST_ADD = 'BLOG_POST_LIST_ADD';

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
                // console.log(response);
                dispatch(blogPostListRecieved(response.body));
            })
            .catch(error => dispatch(blogPostListError(error)));
    }
};

export const blogPostAdd = () => ({
    type: BLOG_POST_LIST_ADD,
    data: {
        id: Math.floor(Math.random() * 100),
        title: "A newly created blogpost"
    }
});