import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Loader extends Component {
  static defaultProps = {
    width: '100%',
    height: '100%',
    fill: '#30c39c',
  };

  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    fill: PropTypes.string,
  };

  render() {
    const {width, height, fill} = this.props;
    return (
      <svg width={width} height={height}
           viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g transform="rotate(180 50 50)">
          <rect ng-attr-x="{{16.666666666666668 - config.width/2}}" y="32.5" ng-attr-width="{{config.width}}" height="22.8518" fill={fill} x="8.666666666666668" width="16">
            <animate attributeName="height" calcMode="spline" values="25;37.5;5;25" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="0s" dur="2.1"></animate>
          </rect>
          <rect ng-attr-x="{{33.333333333333336 - config.width/2}}" y="32.5" ng-attr-width="{{config.width}}" height="5.15893" fill={fill} x="25.333333333333336" width="16">
            <animate attributeName="height" calcMode="spline" values="25;37.5;5;25" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.42000000000000004s" dur="2.1"></animate>
          </rect>
          <rect ng-attr-x="{{50 - config.width/2}}" y="32.5" ng-attr-width="{{config.width}}" height="21.1966" fill={fill} x="42" width="16">
            <animate attributeName="height" calcMode="spline" values="25;37.5;5;25" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.8400000000000001s" dur="2.1"></animate>
          </rect>
          <rect ng-attr-x="{{66.66666666666667 - config.width/2}}" y="32.5" ng-attr-width="{{config.width}}" height="26.621" fill={fill} x="58.66666666666667" width="16">
            <animate attributeName="height" calcMode="spline" values="25;37.5;5;25" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-1.26s" dur="2.1"></animate>
          </rect>
          <rect ng-attr-x="{{83.33333333333333 - config.width/2}}" y="32.5" ng-attr-width="{{config.width}}" height="37.2159" fill={fill} x="75.33333333333333" width="16">
            <animate attributeName="height" calcMode="spline" values="25;37.5;5;25" times="0;0.33;0.66;1" ng-attr-dur="{{config.speed}}" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-1.6800000000000002s" dur="2.1"></animate>
          </rect>
        </g>
      </svg>
    );
  }
}

export default Loader;