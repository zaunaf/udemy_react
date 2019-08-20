import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { renderField } from '../form';
import { connect } from 'react-redux';
import { userLoginAttempt } from "../actions/actions";

const mapDispatchToProps = {
    userLoginAttempt
}

class LoginForm extends React.Component {
    onSubmit(values) {
        console.log(values);
        return this.props.userLoginAttempt(
            values.username,
            values.password
        );
    }
    render() {      
        const {handleSubmit}  = this.props;

        return (
            <div className="text-center">
                <form className="mt-4" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="username" label="Username&nbsp;&nbsp;" type="text" component={renderField} />
                    <Field name="password" label="Password&nbsp;&nbsp;" type="text" component={renderField} />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'LoginForm'
})(connect(null, mapDispatchToProps)(LoginForm));