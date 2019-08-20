// File ini adalah reducers untuk blogPostList
// Yang artinya semua perubahan state untuk blogPost harus melalui file ini
// Setiap alternatif cara perubahan blogPost ada di sini
// Reducer blogPostList selalu mengembalikan state terakhir
// yang telah dimodifikasi
import { BLOG_POST_LIST_REQUEST, BLOG_POST_LIST_RECEIVED, BLOG_POST_LIST_ERROR, BLOG_POST_LIST_ADD } from "../actions/actions";

export default (state= {
    posts: null,
    isFetching: false
}, action) => {
    switch (action.type) {
        case BLOG_POST_LIST_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case BLOG_POST_LIST_RECEIVED:
            // return {
            //     ...state,
            //     posts: action.data['hydra:member'],
            //     isFetching: false
            // };
            console.log(action.data);
            let lastState = {
                ...state,
                posts: action.data['hydra:member'],
                isFetching: false
            }
            console.log(lastState);
            return lastState;

        case BLOG_POST_LIST_ERROR:
            return {
                ...state,
                isFetching: false,
                posts: null
            };
        case BLOG_POST_LIST_ADD:
            return {
                ...state,
                posts: state.posts ? state.posts.concat(action.data) : state.posts
            };
        default:
            return state;
    }    
}