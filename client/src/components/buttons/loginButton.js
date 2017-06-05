import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class LoginButton extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    let clientID = '2fe5c5abcb8d42b394744da82775cc47'
    var auth = window.location.replace("https://instagram.com/oauth/authorize/?client_id=" + clientID + "&redirect_uri=" + window.location.href + "&response_type=token", "auth");
  }

  render() {
    return (
        <Button onClick={this.handleClick}  className="insta-button">Continue with Instagram <img src="http://i.imgur.com/s8x7QpN.png" width="20px;" alt="login"/>
        </Button>
    )
  }
}

export default LoginButton
