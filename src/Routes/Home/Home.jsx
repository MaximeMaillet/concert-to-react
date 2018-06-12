import React, {Component} from 'react';
import { connect } from 'react-redux'
import {toastr} from 'react-redux-toastr'
import { bindActionCreators } from 'redux';

import actions from '../../HOC/Authentication/actions';
import history from '../../history';

import LoginForm from "../../Components/Forms/LoginForm/LoginForm";
import SigninForm from "../../Components/Forms/SigninForm/SigninForm";

import './style.scss';

class Home extends Component {
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

  onSubmitSigninSuccess = (response) => {
    this.props.login(response.data.token);
  };

  onSubmitLoginSuccess = (response) => {
    toastr.success('Success', 'You are authenticated');
    this.props.login(response.data.token);
  };

  render() {
    return (
      <div className="container pt-5">
        {this.props.isAuthenticated ?
            ''
          :
            <section className="main-bloc home-section d-flex flex-row">
              <div className="col-md-6">
                <h2>Log In</h2>
                <LoginForm
                  onSubmitSuccess={this.onSubmitLoginSuccess}
                />
              </div>
              <div className="col-md-6">
                <h2>Sign In</h2>
                <SigninForm
                  onSubmitSuccess={this.onSubmitSigninSuccess}
                />
              </div>
            </section>
        }
      </div>
    )
  }
}

export default connect(
  (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  }),
  (dispatch) => bindActionCreators({...actions}, dispatch)
)(Home);