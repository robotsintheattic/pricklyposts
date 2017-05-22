import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Entry extends Component {
  constructor(props) {
    super(props)

  }

  render() {
      return (
          <div>
              <h1>Entry</h1>
              <p><Link to='journals/'>Home</Link></p>
          </div>
      )
  }
}

export default Entry
