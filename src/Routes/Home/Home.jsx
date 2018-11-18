import React, {Component} from 'react';
import { connect } from 'react-redux'
import {toastr} from 'react-redux-toastr'
import { bindActionCreators } from 'redux';

import actions from '../../HOC/Authentication/actions';
import history from '../../history';

import LoginForm from "../../Components/Forms/LoginForm/LoginForm";
import SigninForm from "../../Components/Forms/SigninForm/SigninForm";

import './home.scss';
import {Link} from "react-router-dom";
import SiteTitle from "../../Components/SiteTitle/SiteTitle";

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
      <div className="container">
        <section className="home-section home-form">
          <div className="row mb-3 mt-5">
            <div className="col-10 col-sm-10 col-md-7 col-lg-5 col-xl-4 mx-auto primary-card">
              <SiteTitle/>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-10 col-sm-10 col-md-7 col-lg-5 col-xl-4 mx-auto primary-card">
              <h2 className="text-center">Log In</h2>
              <LoginForm
                onSubmitSuccess={this.onSubmitLoginSuccess}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-10 col-sm-10 col-md-7 col-lg-5 col-xl-4 mx-auto justify-content-center d-flex primary-card text-center">
              <p className="footer"><Link to="/signin">Je m'inscris</Link></p>
            </div>
          </div>
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
)(Home);