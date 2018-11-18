import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import actions from "../../../HOC/Authentication/actions";

class AccountMenu extends Component {
  render() {
    return (
      <div className="account-menu d-flex flex-column">
        <div className="email">{this.props.user.email}</div>
        <button type="button" onClick={this.props.logout} className="btn btn-secondary">Log Out</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.auth.user,
  }),
  (dispatch) => bindActionCreators({...actions}, dispatch)
)(AccountMenu);