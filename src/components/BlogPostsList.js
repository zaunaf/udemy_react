import React from 'react';

class BlogPostsList extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        // Read posts from passed parameters by the container
        const {posts} = this.props;

        return (<div>
            <ul>
                {posts && posts.map(post => (<li key={post.id}>{post.title}</li>))}
            </ul>
        </div>);        
    }
}

export default BlogPostsList;