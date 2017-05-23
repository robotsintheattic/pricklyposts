import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Sidenav from './../sidenav'
import  ToDo from './../modules/todo'

class Entry extends Component {
  render() {
      return (
          <div>
            <Sidenav />
              <h1>Entry</h1>
              <ToDo />
              <p><Link to='journals/'>Home</Link></p>
              <p><Link to='journal/'>Back to Journal</Link></p>
          </div>
      )
  }
}

export default Entry
