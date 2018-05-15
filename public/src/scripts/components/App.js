import Templater from './Templater.js'
import Header from './Header.js'
import Footer from './Footer.js'
import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
require('./../../styles/sass/style.scss');
const appUrl = 'http://dev.wpreact.com'
const endPoint = `${appUrl}/wp-json/wp/v2/`
const postTypes = ['posts', 'recipes']

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: this.buildRoutes(props.data),
      menu: null,
    }
  }

  componentDidMount () {
    axios.get(appUrl + '/wp-json/wp-api-menus/v2/menus/2')
    .then((res) => {
      this.setState({
        menu: res.data.items
      })
    })
  }

  buildRoutes(data){
    return data.map((page, i) => {
      let path = `${page.link.replace(appUrl, '')}:slug?`
      console.log(path)
      if(path.includes('home')) {
        path = '/'
      }
      return(
        <Route
          key={i}
          render={ props => (<Templater {...props} data={page} />) }
          path={path}
        />
      )
    })
  }

  render() {
    let header = this.state.menu?
      <Header menu={this.state.menu} /> :
      null
      return (
        <Router>
          <div>
            { header }
            <main>
              <Switch>
                {this.state.routes}
              </Switch>
            </main>
          <Footer />
          </div>
        </Router>
      );
  }
}

export default App;
