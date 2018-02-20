import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
const appUrl = 'http://wpreact.dev'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: props.menu
    }
  }

  render() {
    return (
      <nav className="main max-width flex-container vert-center space-between">
        <div className="logo">
          <h1>Reactcipes</h1>
        </div>
        <div className="links">
        {this.props.menu.map((item, i) => <Link key={i} to={item.url.replace(appUrl, '')}>{item.title}</Link>)}
        </div>
      </nav>
    );
  }
}

export default Header;
