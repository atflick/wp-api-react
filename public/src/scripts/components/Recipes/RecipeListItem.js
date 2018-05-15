import React, { Component } from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Global from '../Global.js'
let global = new Global

class RecipeListItem extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      
    }
  }


  render() {
    console.log(this.props.recipe.image_src)
    const imgStyle = {
      background: `url(${this.props.recipe.image_src}) no-repeat center / cover`
    }
    const recipe = (
      <Link to={`/recipes/${this.props.recipe.slug}`}>
        <div style={imgStyle} className="image"><div className="inner"></div></div>
        <h3>{this.props.recipe.title.rendered}</h3>
      </Link>
    )
      return (
        <div className="flex-33 recipe-item">
          {recipe}
        </div>
      );
  }
}

export default RecipeListItem;
