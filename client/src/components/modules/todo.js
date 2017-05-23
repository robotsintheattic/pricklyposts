import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ContentEditable from 'react-contenteditable'

const ToDoItems = React.createClass({
  render: function () {
    let todoEntries = this.props.entries

    function createTasks(item){
      return <li key={item.key}>{item.text}</li>
    }
    let listItems = todoEntries.map(createTasks)

    return(
      <ul className="list-unstyled">
       <li>things</li>
       <li>stuff</li>
       {listItems}
      </ul>
    )
  }
})

const ToDo = React.createClass({
  getInitialState: function() {
    return {
      items: []
    }
  },

  addItem: function(e) {
    let itemArray = this.state.items

    itemArray.push(
      {
        text: this._inputElement.value,
        key: Date.now()
      }
    )

    this.setState({
      items: itemArray
    })

    this._inputElement.value = ""

    e.preventDefault()
  },

  render: function() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={ (a) => this._inputElement = a } placeholder="Make your list!">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <ToDoItems entries={this.state.items} />
      </div>
    )
  }
})

export default ToDo
