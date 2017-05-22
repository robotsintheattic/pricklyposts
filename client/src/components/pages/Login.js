import React, { Component } from 'react'
import '../../App.css'
import Logo from '../../Cactus_6.svg'
import LoginButton from './../buttons/loginButton'
import { Link, browserHistory } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)

    if (this.props.location.hash) {
      let token = this.props.location.hash.split('=')[1]
      localStorage.setItem('token', token)
      window.location.href = '/journals'
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container App-content">
          <h1 className="App-title">Daily <span><img src={Logo} /></span> Dash</h1>
          <LoginButton />
        </div>
      </div>
    )
  }
}

export default Login
