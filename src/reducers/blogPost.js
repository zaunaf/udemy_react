// File ini adalah reducers untuk blogPostList
// Yang artinya semua perubahan state untuk blogPost harus melalui file ini
// Setiap alternatif cara perubahan blogPost ada di sini
// Reducer blogPostList selalu mengembalikan state terakhir
// yang telah dimodifikasi
import { BLOG_POST_REQUEST, BLOG_POST_RECEIVED, BLOG_POST_ERROR } from "../actions/actions";

export default (state= {
    post: null,
    isFetching: false
}, action) => {
    switch (action.type) {
        case BLOG_POST_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case BLOG_POST_RECEIVED:
            console.log(action.data);
            let lastState = {
                ...state,
                post: action.data,
                isFetching: false
            }
            console.log(lastState);
            return lastState;

        case BLOG_POST_ERROR:
            return {
                ...state,
                isFetching: false,
                post: null
            };
        // case BLOG_POST_ADD:
        //     return {
        //         ...state,
        //         posts: state.posts ? state.posts.concat(action.data) : state.posts
        //     };
        default:
            return state;
    }    
}