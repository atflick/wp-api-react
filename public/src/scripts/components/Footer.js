import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
const appUrl = 'http://dev.wpreact.com'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: props.menu
    }
  }

  render() {
    return (
      <footer className="module-padding">
        <div className="max-width">
          <hr/>
        </div>
      </footer>
    );
  }
}

export default Footer;
