import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {name: '', profilePicture: '', id: 0, titles: null}

    if (!localStorage.token) {
      window.location.href = '/'
    }
  }

  componentDidMount() {
    let userData = ''
    var journalList = []
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
        return res.text().then(user => {
          user = JSON.parse(user)
          this.setState({name: user[0], profilePicture: user[1], id: user[2]})
        })
      })
    })
  }

//where do we go?
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <h1 className="Home-title"><img className="Home-img" src={this.state.profilePicture}/>  {this.state.name}'s Journals</h1>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
