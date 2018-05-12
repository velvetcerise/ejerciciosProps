import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Comida extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <img src={this.props.img} alt= "food" />
        <p>Platillo:{this.props.platillo} </p>
        <h3>Costo: {this.props.costo}</h3>
      </div>
    );
  }

}
