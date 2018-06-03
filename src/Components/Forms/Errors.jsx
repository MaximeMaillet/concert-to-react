import React, {Component} from 'react';
import {toastr} from 'react-redux-toastr'

export function handleSubmitFail(error) {
  if(error && Array.isArray(error.message)) {
    for(let i=0; i<error.message.length; i++) {
      toastr.error('Fail', `(${error.message[i].field}) ${error.message[i].message}`);
    }
  } else {
    toastr.error('Fail', error ? error.message : 'Oups, somethink wrong');
  }
}