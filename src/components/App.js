import React from 'react';
import {Route, Switch} from 'react-router';
import LoginForm from "./LoginForm";
import BlogPostsListContainer from "./BlogPostsListContainer";
import { Link } from 'react-router-dom';
import Header from './Header';

class App extends React.Component {
    render() {
        return (            
            <div>
                <Header/>
                Bismillah.. Assalaamu alaikum world
                <Switch>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/" component={BlogPostsListContainer}/>
                </Switch>
            </div>
        );
    }
}

export default App;