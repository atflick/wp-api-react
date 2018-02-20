import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

class FourImages extends Component {
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

              <h2>FourImages</h2>

          </div>
      );
  }
}

export default FourImages;
