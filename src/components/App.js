import React from 'react';
import {Route, Switch} from 'react-router';
import LoginForm from "./LoginForm";
import BlogPostsListContainer from "./BlogPostsListContainer";
import { Link } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div>Bismillah.. Assalaamu alaikum world
                <Switch>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/" component={BlogPostsListContainer}/>
                </Switch>
            </div>
        );
    }
}

export default App;