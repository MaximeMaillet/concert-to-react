import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import actions from '../../HOC/Authentication/actions'
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Logo from "../Logo/Logo";
import AccountMenu from "./Components/AccountMenu";

import './Header.scss'

class Header extends Component {
  render() {
    return (
      <header>
        <Logo className="header-logo" />
        <HeaderTitle/>
        <AccountMenu />
      </header>
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