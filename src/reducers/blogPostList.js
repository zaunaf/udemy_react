// File ini adalah reducers untuk blogPostList
// Yang artinya semua perubahan state untuk blogPost harus melalui file ini
// Setiap alternatif cara perubahan blogPost ada di sini
// Reducer blogPostList selalu mengembalikan state terakhir
// yang telah dimodifikasi
import { BLOG_POST_LIST, BLOG_POST_LIST_ADD } from "../actions/actions";

export default (state= {
    posts: null
}, action) => {
    switch (action.type) {
        case BLOG_POST_LIST:
            return {
                ...state,
                posts: action.data
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