import React, {Component} from 'react';

import './Loader.scss';

export default class Loader extends Component {
  render() {
    const {message, visible} = this.props;
    return (
      <div className={`local-loader ${visible ? 'visible':''}`}>
        <div className="container">
          <div className="row">
            <div className="col-4 col-offset-4">
              coucou
              <img src="../../styles/icons/loader.svg" height="100" width="200" />
              {message && <div className="message">{message}</div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}