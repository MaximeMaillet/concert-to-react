import React, {Component} from 'react';

import './background-picture.scss';

export default class BackgroundPicture extends Component {
  render() {
    const alt = this.props.alt ? this.props.alt : 'backgroud picture';
    return (
      <div className={`background-picture ${this.props.className}`}>
        <img src={this.props.picture} alt={alt} />
      </div>
    );
  }
}