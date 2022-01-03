/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Keypad extends Component {
  render = () => {
    const buttons = [];
    const { keys } = this.props;
    keys.forEach((key) => {
      buttons.push(<button type="button" id={key.id} className={key.class} key={key.id}>{key.value}</button>);
    });
    return (
      <span id="keypad-container">{buttons}</span>
    );
  };
}

Keypad.propTypes = {
  keys: PropTypes.instanceOf(Array).isRequired,
};

export default Keypad;
