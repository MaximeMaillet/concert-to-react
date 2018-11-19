import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class hIcon extends Component {
  static defaultProps = {
    width: '24px',
    height: '24px',
    backgroundColor: '#b50938',
    borderColor: '#ffffff',
    animate: false,
  };

  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    borderColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    animate: PropTypes.bool,
  };

  render() {
    const {width, height, backgroundColor, borderColor, animate} = this.props;
    return (
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 50 50"
           width={width} height={height}
      >
        <path fill={animate ? borderColor : backgroundColor} d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
	        c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
	        c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"/>
        <path fill={animate ? backgroundColor : borderColor} d="M6,18.078c-0.553,0-1-0.447-1-1c0-5.514,4.486-10,10-10c0.553,0,1,0.447,1,1s-0.447,1-1,1
	        c-4.411,0-8,3.589-8,8C7,17.631,6.553,18.078,6,18.078z"/>
      </svg>
    );
  }
}