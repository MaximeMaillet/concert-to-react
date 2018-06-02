import React, {Component} from 'react';

import './Header.scss'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo"/>
        <h1>Concert To</h1>
        <h2>Let's go to concerts ...</h2>
      </div>
    )
  }
}