import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const ToDoItems = React.createClass({
  render: function () {
    let todoEntries = this.props.entries

    function createTasks(item){
      return <li key={item.key}>{item.text}</li>
    }
    let listItems = todoEntries.map(createTasks)

    return(
      <ul className="list-unstyled">
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

    let listItem
    if (this.props.todo.content !== undefined) {
      let todoArray = this.props.todo.content
      console.log(todoArray);
      if (todoArray !== undefined) {
        todoArray = todoArray.substring(2,(todoArray.length -2)).split('"')
        listItem = todoArray.map((item, index) => {
          if (index % 2 === 0) {
            return <li key={index}>{item}</li>
          }
        })
      }
    }
    else return null

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
        <ul className="list-unstyled">
          {listItem}
        </ul>
      </div>
    )
  }
})






export default ToDo
