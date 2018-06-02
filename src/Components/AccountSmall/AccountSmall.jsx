import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import api from '../../services/api';
import history from '../../history';
import actions from '../../HOC/Authentication/actions'

import './account-small.scss';

class AccountSmall extends Component {

  logout = async() => {
    try {
      await api.authenticate.logout();
      this.props.logout();
      history.push('/');
    } catch(e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="account-small d-flex flex-column">
        <div className="email">{this.props.user.email}</div>
        <button type="button" onClick={this.logout} className="btn btn-primary">Log Out</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => bindActionCreators({...actions}, dispatch)
)(AccountSmall);