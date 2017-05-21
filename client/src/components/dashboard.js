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
        userData = {
          fullName: result.data.full_name,
          instagramId: result.data.id,
          userName: result.data.username,
          profilePicture: result.data.profile_picture
        }
      },
      error: function(err) {
        console.log(err);
      }
    }).then(() => {
      // AND HERE ON MONDAY
      fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(userData),
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        console.log(res);
      })
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
