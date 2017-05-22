import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import  EntryButton from './../buttons/entryButton'

class Journal extends Component {
  constructor(props) {
    super(props)

  }

  render() {
      return (
          <div>
              <h1>Journal View (for each individual journal)</h1>
              <p><Link to='journals/'>Home</Link></p>
              <EntryButton />
          </div>
      )
  }
}

export default Journal
