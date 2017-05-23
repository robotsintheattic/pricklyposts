import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'

class Pic extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recentPics: []
    }

    // if (!localStorage.token) {
    //   window.location.href = '/'
    // }
  }
  componentDidMount() {
    let recentPics = ''
    console.log('>>>')
    $.ajax({
      method: 'get',
      url: `https://api.instagram.com/v1/users/self/media/recent/?access_token=${localStorage.token}`,
      dataType: 'jsonp',
      success: function(result) {
        console.log('result', result)
        // this.recentPics = result.data
        return result.data
      },
      error: function(err) {
        console.log(err);
      }
    })
    .then((instaArray) => {
      console.log('checking .then', instaArray)
      this.setState({
        recentPics: instaArray.data
      })
    })
  }
    render() {
      let recent = this.state.recentPics
      console.log('recent:', recent)
      let picsList = recent.map(function(picsDisplay) {
        console.log('picsDisplay', picsDisplay.images.standard_resolution.url);
        return <img src={picsDisplay.images.standard_resolution.url} width="75%" className="insta-pics"/>
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
