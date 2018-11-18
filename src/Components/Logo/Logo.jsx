import React, {Component} from 'react';
import {LogoIcon} from "../../styles/icons/Icons.jsx";

import './Logo.scss'

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    }
  }

  handleMouseHover = () => {
    this.setState({animate: true});
  };

  handleMouseOut = () => {
    this.setState({animate: false});
  };

  render() {
    return (
      <div className="logo"
           onMouseEnter={this.handleMouseHover}
           onMouseLeave={this.handleMouseOut}
      >
        <LogoIcon
          animate={this.state.animate}
          className={this.props.className}
        />
      </div>
    )
  }
}