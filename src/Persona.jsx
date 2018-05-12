import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Persona extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <p>Name: {this.props.data.persona.name} </p>
        <p>Age: {this.props.data.persona.age} </p>
        <button onClick={() => ('')}>Dí Hola {this.props.sayHi}</button>
      </div>
    );
  }

}
