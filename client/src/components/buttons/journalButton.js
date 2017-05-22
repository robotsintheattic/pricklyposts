import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class JournalButton extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    e.preventDefault()

  }

//where do we go?
  render() {
    return (
      <div><Link to='/journal'>Create New Journal</Link>
      </div>
    )
  }
}

export default JournalButton
