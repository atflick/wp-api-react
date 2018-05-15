import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

class Hero extends Component {
  constructor(props) {
    super(props)
    console.log('hero loaded');
    this.state = {

    }
  }


  render() {
    let pattern = this.props.data.pattern ? 'repeat' : 'no-repeat'
    let bgSize = this.props.data.pattern ? '' : 'cover'
    const secStyle = {
      background: ` url(${this.props.data.image}) center ${pattern}`,
      backgroundSize: bgSize,
    }

      return (
          <section className={`${this.props.data.select_module.toLowerCase()} `} style={secStyle}>

              <h2>{this.props.data.title}</h2>

          </section>
      );
  }
}

export default Hero;
