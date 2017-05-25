import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

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
        <Button onClick={this.handleClick} >Logout
        </Button>
    )
  }
}

export default Logout
