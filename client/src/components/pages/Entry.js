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
            <div className="container">
              <h1>Entry</h1>
              <p><Link to='journals/'>Home</Link></p>
              <p><Link to='journal/'>Back to Journal</Link></p>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <Heading />
                </div>
                <div className="col-md-6 col-sm-12">
                  <h1>Mood here</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                    <ToDo />
                </div>
                <div className="col-md-6 col-sm-12">
                  <Textfield />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <img src="https://c402277.ssl.cf1.rackcdn.com/photos/2325/images/hero_small/mountains-hero.jpg?1345838509"/>
                </div>
                <div className="col-md-6 col-sm-12">
                  <BlockQuote />
                </div>
              </div>
            </div>
          </div>
      )
  }
}

export default Entry
