import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'

class Dashboard extends Component {
  constructor(props) {
    super(props)

    if (!localStorage.token) {
      window.location.href = '/'
    }
  }

  componentDidMount() {
    let userData = ''
    $.ajax({
      method: 'get',
      url: `https://api.instagram.com/v1/users/self/?access_token=${localStorage.token}`,
      dataType: 'jsonp',
      success: function(result) {
        userData = result.data
      },
      error: function(err) {
        console.log(err);
      }
    }).then(() => {

      console.log(userData);
    })
  }

  render() {
      return (
          <div>
              <h1>On the dashboard</h1>
              <Link to='/'>Home</Link>
          </div>
      )
  }
}

export default Dashboard
