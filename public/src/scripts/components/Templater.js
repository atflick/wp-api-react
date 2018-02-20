import React, { Component } from 'react';
import Posts from './Posts/Posts.js'
import Recipes from './Recipes/Recipes.js'
import Home from './Home.js'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

class Templater extends Component {
  constructor(props) {
    super(props)
    this.state = {
      component: null
    }
  }
  component = ''
  templates = {
    'page-recipes.php': Recipes,
    'page-posts.php': Posts,
    'page-home.php': Home,
    '': Home
  }


  setTemplate(props) {
    let template
    switch (props.data.template) {
      case 'page-recipes.php':
      template = <Recipes {...props} />
      break;
      case 'page-posts.php':
      template = <Posts {...props} />
      break;
      case 'page-home.php':
      template = <Home {...props} />
      break;
      default:
      template = <Home {...props} />
    }
    return template
  }

  render() {
      return (
        <div>
          { this.setTemplate(this.props) }
        </div>
      );
  }
}

export default Templater;
