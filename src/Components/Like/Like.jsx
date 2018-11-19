import React, {Component} from 'react';
import {HeartIcon} from "../../styles/icons/Icons.jsx";

export default class Like extends Component {
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
      <div className={this.props.className}
           onMouseEnter={this.handleMouseHover}
           onMouseLeave={this.handleMouseOut}
      >
        <HeartIcon
          animate={this.state.animate}
        />
      </div>
    )
  }
}