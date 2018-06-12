import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import actions from '../../HOC/Authentication/actions'
import AccountSmall from '../AccountSmall/AccountSmall.jsx';

import './Header.scss'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="left">
          <div className="logo"/>
          <div className="title">
            <h1>Concert To</h1>
          </div>
        </div>
        <div className="right">
          {this.props.isAuthenticated ? <AccountSmall user={this.props.user} /> : 'NOAUTH'}
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  }),
  (dispatch) => bindActionCreators({...actions}, dispatch)
)(Header);