import React from 'react';
import {Route, Switch} from 'react-router';
import LoginForm from "./LoginForm";
import BlogPostsListContainer from "./BlogPostsListContainer";
import Header from './Header';
import BlogPostContainer from './BlogPostContainer';
import { requests } from '../agent';

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
    render() {
        return (            
            <div>
                <Header/>                
                <Switch>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/blog-post/:id" component={BlogPostContainer}/>
                    <Route path="/" component={BlogPostsListContainer}/>                    
                </Switch>
            </div>
        );
    }
}

export default App;