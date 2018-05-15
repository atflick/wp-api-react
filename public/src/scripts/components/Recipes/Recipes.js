import React, { Component } from 'react';
import RecipeSingle from './RecipeSingle.js'
import RecipeList from './RecipeList.js'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
const appUrl = 'http://dev.wpreact.com/'
const endPoint = `${appUrl}/wp-json/wp/v2/`
import Global from '../Global.js'
let global = new Global

class Recipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: null,
      slug: props.match.params.slug,
      view: null
    }
  }

  componentDidMount() {
    this.getRecipeData(this.props)
  }

  componentWillReceiveProps(newProps) {
    this.getRecipeData(newProps)
  }

  getRecipeData(d) {
    let slug = d.match.params.slug
    axios.get(endPoint + 'recipes')
    .then((res) => {
      let items
      if (slug) {
        items = res.data.find((recipe) => {
          return recipe.slug === slug
        })
      } else {
        items = res.data
        
        res.data.forEach((item, i) => {
          global.getImageUrl(item.featured_media, 'medium', (url) => {
            items[i]['image_src'] = url
          })
        })
        
      }
      this.whichView(items, slug)
    })
  }

  whichView(items, slug) {
    if (items && slug) {
      this.setState({
        view: <RecipeSingle recipe={items} />
      })
    } else if (items) {
      this.setState({
        view: <RecipeList recipes={items} />
      })
    } else {
      return null
    }
  }

  render(){
    return (
      <div className="recipes">
        { this.state.view }
      </div>
    )
  }

}

export default Recipes;
