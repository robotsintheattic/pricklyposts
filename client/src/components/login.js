import React, { Component } from 'react'

class LoginButton extends Component {
  render() {
    return (
      <a href='https://api.instagram.com/oauth/authorize/?client_id=2fe5c5abcb8d42b394744da82775cc47&redirect_uri=https://localhost:3000/dashboard&response_type=code'>Click Me!</a>
    )
  }
}

export default LoginButton
