import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

import {handleSubmitFail} from '../Errors';
import InputText from '../../FormInputs/Fields/InputText.jsx';
import InputPassword from '../../FormInputs/Fields/InputPassword.jsx';
import submit from './submit';

import './loginform.scss';

export const name = 'LoginForm';

class LoginForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="login-form">
        <Field
          label="Email :"
          name="email"
          placeholder="john.doe@doemail.fr"
          component={InputText}
        />
        <Field
          label="Password :"
          name="password"
          component={InputPassword}
        />
        <button type="submit" className="btn btn-primary">Log In</button>
      </form>
    );
  }
}

export default reduxForm({
  form: name,
  onSubmit: submit,
  onSubmitFail: handleSubmitFail,
})(LoginForm);