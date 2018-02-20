import React, { Component } from 'react';
import RecipeListItem from './RecipeListItem.js'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

class RecipeList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  listRecipes() {
    return this.props.recipes.map((recipe, i) => {
      return (
        <RecipeListItem recipe={recipe} key={i} />
      )
    })
  }

  render() {
      return (
          <div>
            <h2>Recipe List</h2>
            <section>
              {this.listRecipes()}
            </section>
          </div>
      );
  }
}

export default RecipeList;
