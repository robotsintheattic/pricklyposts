import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'

class Logout extends Component{
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    localStorage.removeItem('token')
    window.location.replace('/')
  }

  render() {
    return (
      <Nav>
        <NavItem onClick={this.handleClick} className="sideFont"><span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Logout</NavItem>
      </Nav>
    )
  }
}

export default Logout
