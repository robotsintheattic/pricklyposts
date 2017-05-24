import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import { Draggable, Droppable } from 'react-drag-and-drop'
import Sidenav from './../sidenav'
import  ToDo from './../modules/todo'
import  Textfield from './../modules/textfield'
import  BlockQuote from './../modules/blockquote'
import  Heading from './../modules/heading'
import  Mood from './../modules/mood'
import Pic from './../modules/pic'

class Entry extends Component {
  render() {
      return (
          <div>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <h1 className="Home-title"><img className="Home-img" src={localStorage.userPic}/> Welcome, {localStorage.userName}<span><Sidenav /></span></h1>
                </div>
              </div>
            </nav>
            <div className="container">
              <div className="row grid-heading">
                <div className="col-md-6 col-sm-12">
                  <Heading />
                </div>
                <div className="col-md-6 col-sm-12">
                  <Mood />
                </div>
              </div>
              <div className="row grid-top">
                <div className="col-md-6 col-sm-12">
                  <Textfield />
                </div>
                <div className="col-md-6 col-sm-12">
                  <ToDo />
                </div>
              </div>
              <div className="row grid-bottom">
                <div className="col-md-6 col-sm-12 scroll">
                  <Pic />
                </div>
                <div className="col-md-6 col-sm-12">
                  <BlockQuote />
                </div>
              </div>
              <Button className="journals-button" href="/journals">Back to All Journals</Button>
            </div>
          </div>
      )
  }
}

export default Entry
