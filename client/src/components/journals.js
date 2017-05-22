import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import  EntryButton from './entries'

class JournalButton extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    e.preventDefault()

  }

  render() {
    return (
      <div>
        <p>
          <p></p>
          <Link to='/dashboard/journals'>Journal</Link></p>
        <p><EntryButton /></p>
      </div>
    )
  }
}

export default JournalButton