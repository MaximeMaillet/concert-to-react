import React, {Component} from 'react';
import Header from "../../Components/Header/Header.jsx";
import SigninForm from '../../Components/Forms/SigninForm/SigninForm.jsx';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import actions from '../../HOC/Authentication/actions';
import history from '../../history';

import './signin.scss';

class Signin extends Component {
  constructor(props) {
    super(props);
    if(props.isAuthenticated) {
      history.push('/');
    }
  };

  onSubmitSuccess = (response) => {
    this.props.login(response.data.token);
  };

  onSubmitFail = (e) => {
    console.log(e);
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.isAuthenticated) {
      history.push('/');
    }
  };

  render() {
    return (
      <div>
        <Header/>
        <section className="signin-section d-flex flex-column m-5 p-5 bg-gray-100">
          <h2>Sign In</h2>
          <SigninForm
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
)(Signin);