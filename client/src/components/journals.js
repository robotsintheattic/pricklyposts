import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  Journal from './journals'

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
      <Link to='/dashboard/journals'>Journal</Link>
    )
  }
}

export default JournalButton
