import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import  JournalButton from './journals'
import BlockQuote from './blockquote'

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {name: '', profilePicture: ''}

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
        return res.text().then(user => {
          user = JSON.parse(user)
          this.setState({name: user[0], profilePicture: user[1]})
        })
      })
    })
  }

  render() {
      return (
          <div>
              <h1>Welcome to the dashboard {this.state.name}</h1>
              <img src={this.state.profilePicture}/><br/>
              <Link to='/'>Home</Link>
              <JournalButton />
              <Textfield />
              <BlockQuote />
          </div>
      )
  }
}

export default Dashboard
