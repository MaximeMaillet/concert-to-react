import React, {Component} from 'react';
import {connect} from "react-redux";
import Like from "../Like/Like";

import './background-picture.scss';

class BackgroundPicture extends Component {
  render() {
    const {className, picture, onClick, user} = this.props;
    return (
      <div
        className={`background-picture ${className}`}
        style={{
          backgroundImage: `url(${picture})`
        }}
        onClick={onClick}
      >
        <div className="actions d-flex">
          <button className="btn btn-primary" onClick={this.onSee}>Voir</button>
          <Like className="like" />
          {user && user.isAdmin && <button className="btn btn-secondary ml-auto" onClick={this.onEdit}>Éditer</button>}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.auth.user,
  })
)(BackgroundPicture);