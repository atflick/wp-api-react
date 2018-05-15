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
      recipeData: this.props.recipes,
      input: '',
    }
  }

  inputHandler(e) {
    let val = e.target.value.toLowerCase()
    this.setState({
      input: val,
    })
  }

  render() {
    
    const list = this.state.recipeData
      .filter(recipe => this.state.input === '' || recipe.content.rendered.toLowerCase().includes(this.state.input) || recipe.title.rendered.toLowerCase().includes(this.state.input))
      .map((recipe, i) => {
        
        return (
          <RecipeListItem recipe={recipe} key={i} />
        )
      })
      
      return (
          <div>
            <section className="mid-size-hero max-width flex-container">
              <h2>Recipe List</h2>
              <input value={this.state.input} type="text" onChange={this.inputHandler.bind(this)} />
            </section>  

            <section className="max-width flex-container">
              {list}
            </section>
          </div>
      );
  }
}

export default RecipeList;
