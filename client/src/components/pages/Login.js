import React, { Component } from 'react'
import '../../App.css'
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
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Emily, Grace, Jen, & Kaiti got React and Express Together!
        </p>
        <LoginButton />
      </div>
    )
  }
}

export default Login
