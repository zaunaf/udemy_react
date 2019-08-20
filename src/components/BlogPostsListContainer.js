import React from 'react';
import BlogPostsList from './BlogPostsList';
import {blogPostListFetch} from "../actions/actions";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    ...state.blogPostList
});

const mapDispatchTopProps = {    
    blogPostListFetch
}

class BlogPostsListContainer extends React.Component {
    // Saat component sudah mounted ke tampilan
    componentDidMount() {
        console.log(this.props);
        // Jalankan action
        console.log("Action is dispatched");
        this.props.blogPostListFetch();
    }
    render() {
        console.log("Rendering..");
        console.log(this.props)
        // Selalu menampilkan isi posts terakhir setiap render dijalankan
        return (<BlogPostsList posts={this.props.posts} isFetching={this.props.isFetching}/>);
    }
}

export default connect(mapStateToProps, mapDispatchTopProps)(BlogPostsListContainer);