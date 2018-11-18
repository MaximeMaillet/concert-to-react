import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {Lock, Mail} from 'react-feather';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import Input from '../../FormInputs/Fields/Input.jsx';
import submit from './submit';
import validate from './validate';
import actions from "../../Loader/actions";

import '../forms.scss';
import './signinform.scss';
import FormErrors from "../../FormInputs/FormErrors";

export const name = 'SigninForm';

class SigninForm extends Component {
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
      <form onSubmit={this.props.handleSubmit} className="signin-form">
        <FormErrors error={this.props.error} />
        <Field
          name="email"
          placeholder="Email"
          group={<Mail size="25" color="#41546e" />}
          type="email"
          component={Input}
        />
        <Field
          name="plainPassword"
          placeholder="Password"
          group={<Lock size="25" color="#41546e" />}
          type="password"
          component={Input}
        />
        <Field
          name="plainPasswordRepeat"
          placeholder="Repeat"
          group={<Lock size="25" color="#41546e" />}
          type="password"
          component={Input}
        />
        <button type="submit" className="btn btn-primary btn-concert-default">Sign In</button>
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
})(SigninForm));