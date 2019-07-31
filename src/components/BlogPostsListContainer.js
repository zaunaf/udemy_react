import React from 'react';
import BlogPostsList from './BlogPostsList';

class BlogPostsListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.posts = [
            {
                id: 1,
                title: 'First Post'
            },
            {
                id: 2,
                title: 'Second Post'
            }

        ]
    }
    render() {
        return (<BlogPostsList posts={this.posts} />);
    }
}

export default BlogPostsListContainer;