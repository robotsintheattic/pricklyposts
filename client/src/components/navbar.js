import React, { Component } from 'react'


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
                <h1 className="Home-title"><img className="Home-img" src={localStorage.userPic} alt="profile-pict"/> <p>Welcome, {localStorage.userName}</p>
                </h1>

              </div>
              <hr className="navbarHR"/>
              <h3>Select One of Your Journals!</h3>
            </div>
          </nav>
        </div>
      )
  }
}

export default Navbar
