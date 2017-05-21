import React, { Component } from 'react'

class LoginButton extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    e.preventDefault()
    let clientID = '2fe5c5abcb8d42b394744da82775cc47'
    var auth = window.location.replace("https://instagram.com/oauth/authorize/?client_id=" + clientID + "&redirect_uri=" + "http://localhost:3000/" + "&response_type=token", "auth");
  }

  render() {
    return (
      <a href='#' onClick={this.handleClick}>Login with Instagram</a>
    )
  }
}

export default LoginButton
