import {render}             from 'react-dom';
import App                 from 'components/App.js';
// import DataActions          from 'data/DataActions.js'
import axios                from 'axios';


const appUrl = 'http://dev.wpreact.com/'
const endPoint = `${appUrl}/wp-json/wp/v2/`
const postTypes = ['posts', 'recipes']

class AppInitializer {

  run() {
    axios.get(endPoint + 'pages' )
    .then((res) => {
      render(
            <App data={res.data}/>
        , document.getElementById('app')
      );
    })

  }
}

new AppInitializer().run();
