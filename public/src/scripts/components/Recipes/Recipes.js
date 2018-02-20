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
const appUrl = 'http://wpreact.dev/'
const endPoint = `${appUrl}/wp-json/wp/v2/`

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
      <div>
        { this.state.view }
      </div>
    )
  }

}

export default Recipes;
