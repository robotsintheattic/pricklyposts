import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import LoginButton from './components/login'
import { Link, browserHistory } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)

    if (this.props.location.hash) {
      let token = this.props.location.hash.split('=')[1]
      localStorage.setItem('token', token)
      window.location.href = '/dashboard'
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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

export default Home
