import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class sIcon extends Component {
  static defaultProps = {
    width: '100%',
    height: '100%',
    fill: '#212121',
    className: '',
  };

  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    fill: PropTypes.string,
    className: PropTypes.string,
  };

  render() {
    const {width, height, fill, className} = this.props;
    return (
      <svg x="0px" y="0px" width={width} height={height} viewBox="0 0 485.213 485.213" className={className}>
        <g>
	        <g>
		        <path d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324    c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z" fill={fill} />
		        <path d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951    C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46    c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465    C318.424,257.208,257.206,318.416,181.956,318.416z" fill={fill} />
		        <path d="M75.817,181.955h30.322c0-41.803,34.014-75.814,75.816-75.814V75.816C123.438,75.816,75.817,123.437,75.817,181.955z" fill={fill}/>
	        </g>
        </g>
      </svg>
    );
  }
}