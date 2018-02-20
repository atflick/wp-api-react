import React, { Component } from 'react';
import Modules from './Modules/Modules.js'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
      return (
          <div>
            <Modules mods={this.props.data.acf.modules} />
          </div>
      );
  }
}

export default Home;
