import React from 'react';
import { blogPostFetch } from "../actions/actions";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    ...state.blogPost
});

const mapDispatchToProps = {
    blogPostFetch
}

class BlogPostContainer extends React.Component {
    componentDidMount () {
        console.log(this.props);
        console.log(this.props.match.params.id);
        this.props.blogPostFetch(this.props.match.params.id);
        // .then(()=> console.log(this.props));
    }
    render() {
        const {post, isFetching} = this.props;
        if (isFetching) {
            return (<div><i className="fa fa-spinner fa-spin"></i></div>)
        }
        if (post === null) {
            return '';
        }
        return (
            <div>
                <h3>{this.props.post.DeptName}</h3>
                You're selecting blog #{this.props.match.params.id}!
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostContainer);