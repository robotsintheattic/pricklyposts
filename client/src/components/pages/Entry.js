import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Sidenav from './../sidenav'
import  ToDo from './../modules/todo'
import  Textfield from './../modules/textfield'
import  BlockQuote from './../modules/blockquote'
import  Heading from './../modules/heading'

class Entry extends Component {
  render() {
      return (
          <div>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <h1 className="Home-title"><img className="Home-img" src={localStorage.userPic}/> Welcome, {localStorage.userName}</h1>
                  <Sidenav />
                </div>
              </div>
            </nav>

              <h1>Entry</h1>
              <p><Link to='journals/'>Home</Link></p>
              <p><Link to='journal/'>Back to Journal</Link></p>
              <Heading />
              <ToDo />
              <Textfield />
              <BlockQuote />
          </div>
      )
  }
}

export default Entry
