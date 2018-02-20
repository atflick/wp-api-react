import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    // let allData = DataStore.getAll();
    // console.log(allData);
      return (
          <div>

              <h2>Posts</h2>

              <h1>Header 1</h1>
              <h2>Header 2</h2>
              <h3>Header 3</h3>
              <h4>Header 4</h4>
              <h5>Header 5</h5>
              <h6>Header 6</h6>
              <p>This is text</p>
              <a>This is link</a>

          </div>
      );
  }
}

export default Posts;
