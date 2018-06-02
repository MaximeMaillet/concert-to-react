import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import actions from '../../HOC/Authentication/actions';
import history from '../../history';
import {toastr} from 'react-redux-toastr'

import Header from "../../Components/Header/Header.jsx";
import LoginForm from "../../Components/Forms/LoginForm/LoginForm.jsx";

class Login extends Component {
  constructor(props) {
    super(props);
    if(props.isAuthenticated) {
      history.push('/search');
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isAuthenticated) {
      history.push('/search');
    }
  };

  onSubmitSuccess = (response) => {
    toastr.success('Success', 'You are authenticated');
    this.props.login(response.data.token);
  };

  render() {
    return (
      <div>
        <Header/>
        <section className="login-section d-flex flex-column m-5 p-5 bg-gray-100">
          <h2>Log In</h2>
          <LoginForm
            onSubmitSuccess={this.onSubmitSuccess}
          />
        </section>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  }),
  (dispatch) => bindActionCreators({...actions}, dispatch)
)(Login);