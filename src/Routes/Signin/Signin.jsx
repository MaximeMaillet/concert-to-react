import React, {Component} from 'react';
import SigninForm from '../../Components/Forms/SigninForm/SigninForm.jsx';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import actions from '../../HOC/Authentication/actions';
import history from '../../history';

import './signin.scss';
import {Link} from "react-router-dom";
import SiteTitle from "../../Components/SiteTitle/SiteTitle";

class Signin extends Component {
  constructor(props) {
    super(props);
    if(props.isAuthenticated) {
      history.push('/search');
    }
  };

  onSubmitSuccess = (response) => {
    this.props.login(response.data.token);
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.isAuthenticated) {
      history.push('/search');
    }
  };

  render() {
    return (
      <div className="container">
        <section className="signin-section home-form">
          <div className="row mb-3 mt-5">
            <div className="col-10 col-sm-10 col-md-7 col-lg-5 col-xl-4 mx-auto primary-card">
              <SiteTitle/>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-10 col-sm-10 col-md-7 col-lg-5 col-xl-4 mx-auto primary-card">
              <h2 className="text-center">Sign In</h2>
              <SigninForm
                onSubmitSuccess={this.onSubmitSuccess}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-10 col-sm-10 col-md-7 col-lg-5 col-xl-4 mx-auto justify-content-center d-flex primary-card text-center">
              <p className="footer"><Link to="/">Je me connecte</Link></p>
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
)(Signin);