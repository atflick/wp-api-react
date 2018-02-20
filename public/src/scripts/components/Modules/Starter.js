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
console.log(this.props);
      return (
          <section className={`${this.props.data.select_module.toLowerCase()}`}>

              

          </section>
      );
  }
}

export default Hero;
