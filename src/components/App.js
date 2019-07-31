import React from 'react';
import {Route, Switch} from 'react-router';
import LoginForm from "./LoginForm";
import BlogPostsList from "./BlogPostsList";

class App extends React.Component {
    render() {
        return (
            <div>Bismillah.. Assalaamu alaikum world
                <Switch>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/" component={BlogPostsList}/>
                </Switch>
            </div>
        );
    }
}

export default App;