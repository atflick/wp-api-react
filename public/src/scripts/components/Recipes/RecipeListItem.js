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
    this.state = {
      title: props.recipe.title.rendered,
      slug: props.recipe.slug,
      image_link: props.recipe['_links']['wp:featuredmedia'][0].href,
      image_src: ''
    }
  }

  componentDidMount () {
    global.getImageUrl(this.props.recipe.featured_media, 'medium', (url) => {
      this.setState({image_src: url})
    })
  }

  render() {
      return (
        <div>
          <h4>Recipe</h4>
          <Link to={`/recipes/${this.state.slug}`}><h3>{this.state.title}</h3></Link>
          <img src={this.state.image_src} />
        </div>
      );
  }
}

export default RecipeListItem;
