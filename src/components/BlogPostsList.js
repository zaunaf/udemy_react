import React from 'react';

class BlogPostsList extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        // Read posts from passed parameters by the container
        const {posts, isFetching} = this.props;
        if (isFetching) {
            return (<div><i className="fa fa-spinner fa-spin"></i></div>)
        }
        if (null === posts || 0 === posts.length) {
            return (<div>No blog posts</div>);
        }
        return (<div>
            <ul>
                {/* {posts && posts.map(post => (<li key={post.id}>{post.title}{post.DeptName}</li>))} */}
                {posts && posts.map(post => (
                    <div className="card mb-3 mt-3 shadow-sm" key={post.id}>
                        <div className="card-body">
                            <h4>{post.title}{post.DeptName}</h4>
                            <p className="card-text">
                                Lorem ipsum dolor sir amet dsb wah oh weh bakekok awer aewoi 
                            </p>
                        </div>
                    </div>
                ))}
                
            </ul>
        </div>);        
    }
}

export default BlogPostsList;