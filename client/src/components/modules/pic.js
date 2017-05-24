import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'

class Pic extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recentPics: []
    }
  }
  componentDidMount() {
    let recentPics = ''
    $.ajax({
      method: 'get',
      url: `https://api.instagram.com/v1/users/self/media/recent/?access_token=${localStorage.token}`,
      dataType: 'jsonp',
      success: function(result) {
        return result.data
      },
      error: function(err) {
        console.log(err);
      }
    })
    .then((instaArray) => {
      this.setState({
        recentPics: instaArray.data
      })
    })
  }
    render() {
      let recent = this.state.recentPics
      let picsList = recent.map(function(picsDisplay) {
        return <img src={picsDisplay.images.standard_resolution.url} id="drag-me" draggable="true"
ondragstart="drag(event)" width="75%" className="insta-pics"/>
      })
      return (
        <div className='insta-collection'>
          <div className="text-center">
          {picsList}
          </div>
          <br/>
          <Link to='/'>Home</Link>
        </div>
      )
    }
}

export default Pic
