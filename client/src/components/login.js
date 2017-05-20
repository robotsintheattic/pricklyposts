import React, { Component } from 'react'

class LoginButton extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick = (e) => {
    e.preventDefault()
    console.log('Clicked')
  }

  render() {
    return (
      <a href='/' onClick={this.handleClick}>Click Me!</a>
    )
  }
}

export default LoginButton
