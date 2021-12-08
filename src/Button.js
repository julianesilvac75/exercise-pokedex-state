import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  render() {
    const { className, onClick, disabled, name } = this.props;
    return (
      <button
        className={`button ${className}`}
        onClick={ onClick }
        disabled={ disabled }
        name={ name }
      >
        {name}
      </button>
    )
  }
}
