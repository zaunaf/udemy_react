import React from 'react';
import {Route, Switch} from 'react-router';
import LoginForm from "./LoginForm";
import BlogPostsListContainer from "./BlogPostsListContainer";
import Header from './Header';
import BlogPostContainer from './BlogPostContainer';
import { userProfileFetch, userSetId } from '../actions/actions';
import { requests } from '../agent';
import { connect } from 'react-redux';

// Agar data auth bisa dipanggil
const mapStateToProps = state => ({
    ...state.auth
});

// Agar dispatch actions bisa dipanggil
const mapDispatchToProps = {
    userProfileFetch, userSetId
};

class App extends React.Component {    
    constructor(props) {
        super(props);
        
        // Load token from LocalStorage 
        // So if the browser refreshed 
        // we still able to get the data from the backend
        const token = window.localStorage.getItem('jwtToken');        
        if (token) {
            requests.setToken(token);
        }
    }

    componentDidMount() {
        const userId = window.localStorage.getItem('userId');
        const {userSetId} = this.props;

        if (userId) {
            userSetId(userId);            
        }
    }
    
    componentDidUpdate(prevProps) {
        const {userId, userProfileFetch} = this.props;

        if (prevProps.userId !== userId && userId !== null) {
            console.log('Old userId', prevProps.userId);
            console.log('New userId', userId);
            userProfileFetch(userId);
        }

    }
    render() {
        // console.log(this.props);
        // Tambahkan agar userData dapat dipass ke Header
        const {isAuthenticated, userData} = this.props;
        return (            
            <div>
                {/* Pass ke header  */}
                <Header isAuthenticated={isAuthenticated} userData={userData}/>
                <Switch>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/blog-post/:id" component={BlogPostContainer}/>
                    <Route path="/" component={BlogPostsListContainer}/>                    
                </Switch>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);