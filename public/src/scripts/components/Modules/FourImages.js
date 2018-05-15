import React, {
  Component
} from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

class FourImages extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      modalImageSrc: '',
      modalActive: false
    }
  }


 imageModal(src) {
    if(src) { this.setState({modalImageSrc: src}) }
    const currentState = this.state.modalActive
    this.setState({modalActive: !currentState})
  }

  render() {
    let title = this.props.data.title
    let fourImages = this.props.data.four_images.map((image, i) => {
      let secStyle = {
        background: ` url(${image.image}) center no-repeat`,
        backgroundSize: 'cover',
      }
      return <div className="flex-25" key={i}><div style={secStyle} className="inner" onClick={() => this.imageModal(image.image)}></div></div>
    })

    let modalStyle = {
      background: `url(${this.state.modalImageSrc}) center / cover no-repeat`, 
      backgroundSize: 'cover',
    }

    return ( 
      <section className="four_images module-padding">
        <div className="max-width">
          <h2>{ title }</h2>

          <div className="image-container flex-container">
            { fourImages }
          </div>
        </div>
        <div className={ this.state.modalActive ? 'modal active' : 'modal' } onClick={() => this.imageModal(false)}>
          <div className="inner" style={modalStyle} >
            <div className="close" onClick={() => this.imageModal(false)}>X</div>
          </div>
        </div>  
      </section>
    );
  }
}

export default FourImages;
