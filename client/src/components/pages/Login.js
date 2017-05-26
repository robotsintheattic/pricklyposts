import React, { Component } from 'react'
import logoOne from '../../img/logo-1.png'
import logoTwo from '../../img/logo-2.png'
import Logo from '../../img/Cactus_6.png'
import LoginButton from './../buttons/loginButton'

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
          <h1 className="App-title">
            <img className="logo-1" alt="svg of a cactus" src={logoOne} />
            <img className="Cactus-logo" alt="svg of a cactus" src={Logo} />
            <img className="logo-2" alt="svg of a cactus" src={logoTwo} />
          </h1>
          <LoginButton />
        </div>
      </div>
    )
  }
}

export default Login
