import axios from 'axios';

class Global {
  constructor() {
    this.appUrl = 'http://wpreact.dev'
    this.endPoint = `${this.appUrl}/wp-json/wp/v2/`
    this.mediaEndPoint = `${this.appUrl}/wp-json/wp/v2/media/`
    this.postTypes = ['posts', 'recipes']

  }
  getImageUrl(id, size, cb) {
    axios.get(this.mediaEndPoint + id)
    .then((res) => {
      cb(res.data['media_details'].sizes[size].source_url)
    })
  }

 saySomething() {

  }
}

export default Global
