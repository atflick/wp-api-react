import React, { Component } from 'react';
import axios from 'axios';
import Hero from './Hero.js'
import ThreeColumn from './ThreeColumn.js'
import FourImages from './FourImages.js'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

class Modules extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {

    }
  }
  modules = {
    hero: Hero,
    three_column: ThreeColumn,
    four_images: FourImages,
  }

  displayModules(data) {
    return data.map((mod, i) => {
      switch (mod.select_module) {
        case 'Hero':
          return <Hero key={i} data={mod} />
          break;
        case 'Three Column':
          return <ThreeColumn key={i} data={mod} />
          break;
        case 'Four Images':
          return <FourImages key={i} data={mod} />
          break;
        default:

      }
    })
  }

  render() {
    return (
      <div>
        { this.displayModules(this.props.mods) }
      </div>
    );
  }
}

export default Modules;
