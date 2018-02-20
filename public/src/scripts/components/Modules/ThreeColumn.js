import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

class ThreeColumn extends Component {
  constructor(props) {
    super(props)
    console.log('hero loaded');
    this.state = {

    }
  }


  render() {
    // let allData = DataStore.getAll();
    // console.log(allData);
      return (
          <div>

              <h2>ThreeColumn</h2>

          </div>
      );
  }
}

export default ThreeColumn;
