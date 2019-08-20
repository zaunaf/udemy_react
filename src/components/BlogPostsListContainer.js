import React from 'react';
import BlogPostsList from './BlogPostsList';
import {blogPostAdd, blogPostListFetch} from "../actions/actions";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    ...state.blogPostList
});

const mapDispatchTopProps = {    
    blogPostAdd,
    blogPostListFetch
}

class BlogPostsListContainer extends React.Component {
    // Saat component sudah mounted ke tampilan
    componentDidMount() {
        console.log(this.props);
        // Jalankan action
        console.log("Action is dispatched");
        // this.props.blogPostList();
        this.props.blogPostListFetch();
        // Test jalankan action add blogPost
        // setTimeout(this.props.blogPostAdd,3000);
        // setTimeout(this.props.blogPostAdd,5000);
        // setTimeout(this.props.blogPostAdd,7000);
    }
    render() {
        // Masih kosong saat pertama dijalankan
        console.log("Rendering..");
        console.log(this.props)
        // Selalu menampilkan isi posts terakhir setiap render dijalankan
        return (<BlogPostsList posts={this.props.posts} isFetching={this.props.isFetching}/>);
    }
}

export default connect(mapStateToProps, mapDispatchTopProps)(BlogPostsListContainer);