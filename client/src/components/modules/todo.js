import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import ContentEditable from 'react-contenteditable'

const todo = React.createClass({
  render: function() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="Make your list!">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    )
  }
})

export default ToDo
