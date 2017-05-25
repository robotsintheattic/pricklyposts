import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'

class Pic extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recentPics: []
    }
    this.selectPic = this.selectPic.bind(this)
  }

  selectPic(e) {
    if (e.target.src) {
      localStorage.setItem('img_src', e.target.src)
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
        return <img src={picsDisplay.images.standard_resolution.url} width="75%" className="insta-pics"/>
      })
      return (
        <div className='insta-collection'>
          <div className="text-center" onClick={this.selectPic}>
          {picsList}
          </div>
          <br/>
          <Link to='/'>Home</Link>
        </div>
      )
    }
}

export default Pic
