import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

class Navbar extends Component {
  constructor(props) {
    super(props)

    if (!localStorage.token) {
      window.location.href = '/'
    }
  }

  render() {
      return (
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <h1 className="Home-title"><img className="Home-img" src={this.props.user.profilePicture}/>  {this.props.user.name}'s Journals</h1>
              </div>
            </div>
          </nav>
        </div>
      )
  }
}

export default Navbar
