import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Dashboard extends Component {
  constructor(props) {
    super(props)

    if (localStorage.token) {
      console.log('token exists');
    }
  }
  render() {
      return (
          <div>
              <h1>On the dashboard</h1>
              <Link to='/'>Home</Link>
          </div>
      )
  }
}

export default Dashboard
