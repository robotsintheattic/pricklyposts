import React, { Component } from 'react'
import Sidenav from './sidenav'
import CreateEntry from './buttons/createEntryButton'
import  Logout from './buttons/logoutButton'
import DeleteEntry from './buttons/deleteBtn'


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
                <h1 className="Home-title"><img className="Home-img" src={localStorage.userPic} alt="profile picture"/> <p>Welcome, {localStorage.userName}</p>
                <span><Sidenav /></span>
                </h1>

              </div>
              <hr className="navbarHR"/>
            </div>
          </nav>
          <hr className="navbarHR"/>
        </div>
      )
  }
}

export default Navbar
