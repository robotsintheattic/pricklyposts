import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EntryButton extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <Link to='/dashboard/journals/entries'>Entry</Link>
    )
  }
}

export default EntryButton
