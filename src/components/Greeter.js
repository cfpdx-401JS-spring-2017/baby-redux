import React, { Component } from 'react';
import { salutation, name, punctuation } from '../constants/constant';

export default class Greeter extends Component {
  render() {
    return (
      <div>
        <span>{salutation}</span>
        <span>{name}{punctuation}</span>
      </div>
    );
  }
}