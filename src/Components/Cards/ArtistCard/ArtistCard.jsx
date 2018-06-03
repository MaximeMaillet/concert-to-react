import React, {Component} from 'react';
import BackgroundPicture from "../BackgroundPicture/BackgroundPicture";

import './artist-card.scss';

export default class ArtistCard extends Component {
  render() {
    return (
      <div className={`artist-card m-1 ${this.props.className}`}>
        <BackgroundPicture picture={this.props.logo} alt={`background artist ${this.props.name}`} />
        <div className="name">{this.props.name}</div>
        <div className="events">
          {this.props.events.map((event) => (
            <div>{event.name}</div>
          ))}
        </div>
      </div>
    );
  }
}