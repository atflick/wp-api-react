import React, { Component } from 'react';


import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Global from '../Global.js'
let global = new Global

class RecipeSingle extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      title: props.recipe.title.rendered,
      content: props.recipe.content.rendered,
      media_id: props.recipe.featured_media,
      image_src: ''
    }
  }
  componentWillReceiveProps(newProps) {

  }

  componentDidMount() {
    global.getImageUrl(this.state.media_id, 'full', (url) => {
      this.setState({image_src: url})
    })
  }

  render() {

    return (
      <div>
        <h2>{this.state.title}</h2>
        <img src={this.state.image_src} />
        <div dangerouslySetInnerHTML={{__html: this.state.content}} />
      </div>
    );
  }
}

export default RecipeSingle;
