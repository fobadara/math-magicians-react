/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Screen extends Component {
  render() {
    // console.log(this.props.state.total);
    // const {props} = this;
    // todo: line 9 and 10 works
    // const { ...data } = this.props;
    // console.log(data.state.total);
    // const { data } = this.props;
    // console.log(data);
    const {
      // data,
      state: { total, operation, next },
    } = this.props;

    return (
      <div id="screen">
        <span>{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
      </div>
    );
  }
}

Screen.propTypes = {
  state: PropTypes.shape({
    total: PropTypes.string.isRequired,
    operation: PropTypes.string.isRequired,
    next: PropTypes.string.isRequired,
  }).isRequired,
};

export default Screen;
