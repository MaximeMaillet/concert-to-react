import React, {Component} from 'react';

export default class FormErrors extends Component {
  render() {
    const {error} = this.props;
    if(!error) {
      return null;
    }

    console.log(error);
    let message = error.message;

    let exception = '';
    if(error.exception) {
      for(let i=0; i<error.exception.length; i++) {
        exception += '('+error.exception[i].class+')';
      }
    }

    if(error.data && Array.isArray(error.data)) {
      message = <ul>
        {error.data.map((item, key) => {
          return <li key={key}>{item.field} : {item.message}</li>
        })}
      </ul>;
    }

    return (
      <div className="callout callout-danger">
        <div>{message}</div>
        <div>{exception}</div>
      </div>
    );
  }
}