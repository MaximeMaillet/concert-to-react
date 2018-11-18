import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {Lock, Mail} from 'react-feather';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Input from '../../FormInputs/Fields/Input.jsx';
import submit from './submit';
import validate from './validate';
import FormErrors from "../../FormInputs/FormErrors";
import Loader from "../../Loader/Loader.jsx";

import actions from '../../Loader/actions';
import '../forms.scss';
import './loginform.scss';

export const name = 'LoginForm';

class LoginForm extends Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.submitting) {
      this.props.startLoader();
    } else {
      if(nextProps.visible) {
        this.props.stopLoader();
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="login-form">
        <FormErrors error={this.props.error} />
        <Field
          name="email"
          group={<Mail size="25" color="#52565e" />}
          placeholder="Email"
          type="email"
          component={Input}
        />
        <Field
          name="password"
          group={<Lock size="25" color="#52565e" />}
          placeholder="Password"
          type="password"
          component={Input}
        />
        <button type="submit" className="btn btn-primary btn-login">Let's to concert !</button>
      </form>
    );
  }
}

export default connect(
  (state) => ({
    visible: state.loader.visible,
  }),
  (dispatch) => bindActionCreators({...actions}, dispatch)
)(reduxForm({
  form: name,
  onSubmit: submit,
  validate,
})(LoginForm))