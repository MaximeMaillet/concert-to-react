import React, {Component} from 'react';
import moment from 'moment';
import BackgroundPicture from "../../BackgroundPicture/BackgroundPicture";

import './ArtistCard.scss';

export default class ArtistCard extends Component {
  constructor(props) {
    super(props);
    this.sortEvents(props.events);
    this.state = {
      longCardImage: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.sortEvents(nextProps.events)
  }

  sortEvents = (events) => {
    events.sort((item1, item2) => {
      let date1 = (new Date(item1.startDate)).getTime();
      let date2 = (new Date(item2.startDate)).getTime();

      if(date1 > date2) {
        return -1;
      } else if(date1 < date2) {
        return 1;
      }

      return 0;
    });
  };

  handleShowButtons = () => {
    this.setState({longCardImage: !this.state.longCardImage});
  };

  handleShowArtist = () => {

  };

  handleEditArtist = () => {

  };

  render() {
    const {name, logo, events} = this.props;
    const eventsNumber = (events.filter((ev) => (new Date(ev.startDate)).getTime() > Date.now())).length;
    return (
      <div className="artist-card">
        <BackgroundPicture
          picture={logo}
          className="card-image"
          onClick={this.handleShowButtons}
          onSee={this.handleShowArtist}
          onEdit={this.handleEditArtist}
        />
        <div className={`card-content ${this.state.longCardImage ? 'long':''}`}>
          <div className="name">{name}</div>
          <div className="events-number">
            {eventsNumber > 0 ? `${eventsNumber} évènement(s) à venir` : 'Aucun évènement à venir'}
          </div>
          <div className="events">
            {events.slice(0, 3).map((event, key) => (
              <div className="event" key={key}>
                <div className="date">{moment(event.startDate).format('d MMM[.] YYYY')}</div>
                <div className="name">{event.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}