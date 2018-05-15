import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

class ThreeColumn extends Component {
  constructor(props) {
    super(props)
    
    this.state = {

    }
  }


  render() {
    console.log(this.props)
    let title = this.props.data.title
    let content = this.props.data.three_column.map((item, i) => {

      return (
        <div className="flex-33" key={i}>
          <div className="inner" dangerouslySetInnerHTML={{__html: item.content}}>
          </div>
        </div>
      )
    })
    return ( 
      <section className="three_column module-padding">
        <div className="max-width">
          <h2>{ title }</h2>

          <div className="image-container flex-container">
            { content }
          </div>
        </div>
      </section>
    );
  }
}

export default ThreeColumn;
