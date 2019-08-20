import { combineReducers } from "redux";
import blogPostList from "./reducers/blogPostList";
import blogPost from "./reducers/blogPost";
import auth from "./reducers/auth";
import {reducer as formReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    blogPostList,
    blogPost,
    form: formReducer,
    router: routerReducer,
    auth
});
