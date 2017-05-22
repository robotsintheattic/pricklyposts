import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'

class Pic extends Component {
  constructor(props) {
    super(props)

    this.state = {recentPics: ''}

    if (!localStorage.token) {
      window.location.href = '/'
    }
  }
  componentDidMount() {
    let recentPics = ''
    $.ajax({
      method: 'get',
      url: `https://api.instagram.com/v1/users/{user-id}/media/recent/?access_token=${localStorage.token}`,
      dataType: 'jsonp',
      success: function(result) {
        recentPics = {
          pic: result.data.images.standard_resolution
        }
      },
      error: function(err) {
        console.log(err);
      }
    })
    // .then(() => {
    // })
    render() {
      let recentPics = this.state.pic
      let picsList = recentPics.map(function(picsDisplay){
        return <img src={picsDisplay} />
      })
        return (
            <div className='insta-collection'>
                <div>{picsList}</div><br/>
                <Link to='/'>Home</Link>
            </div>
        )
    }
})

export default Pic
