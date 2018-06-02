import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import actions from '../../HOC/Authentication/actions';
import history from '../../history';

import Header from "../../Components/Header/Header.jsx";
import LoginForm from "../../Components/Forms/LoginForm/LoginForm.jsx";

class Login extends Component {
  constructor(props) {
    super(props);
    if(props.isAuthenticated) {
      history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isAuthenticated) {
      history.push('/');
    }
  };

  onSubmitSuccess = (response) => {
    console.log('SUCCESS');
    // this.props.login(response.data.token);
  };

  onSubmitFail = (err) => {
    console.log('FAIL');
    console.log(err);
  };

  render() {
    return (
      <div>
        <Header/>
        <section className="login-section d-flex flex-column m-5 p-5 bg-gray-100">
          <h2>Log In</h2>
          <LoginForm
            onSubmitSuccess={this.onSubmitSuccess}
            onSubmitFail={this.onSubmitFail}
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