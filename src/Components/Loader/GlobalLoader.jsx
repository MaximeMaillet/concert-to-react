import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {Loader} from '../../styles/icons/Icons.jsx';
import './Loader.scss';

class GlobalLoader extends Component {
  static defaultProps = {
    message: 'Chargement ...',
    fillIcon: '#30c39c',
  };

  static propTypes = {
    message: PropTypes.string,
    fillIcon: PropTypes.string,
  };

  render() {
    const {message, visible} = this.props;
    if(!visible) {
      return null;
    }

    return (
      <div className={`global-loader ${visible ? 'visible':''}`}>
        <div className="container container-global-loader">
          <div className="bloc">
            <div className="icon">
              <Loader fill={this.props.fillIcon} />
            </div>
            <div className="message">
              {message}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    visible: state.loader.visible,
    message: state.loader.message,
  }),
)(GlobalLoader)