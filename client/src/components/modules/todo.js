import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ToDoItems extends Component {
  render() {
    let todoEntries = this.props.entries

    function createTasks(item){
      return <p key={item.key}>{item.text}</p>
    }
    let listItems = todoEntries.map(createTasks)

    return(
      <ul className="list-unstyled">
       {listItems}
      </ul>
    )
  }
}

class ToDo extends Component{
  constructor(props) {
    super(props)
      this.state = {items: []}
      this.addItem = this.addItem.bind(this)
  }

  addItem(e) {
    let itemArray = this.state.items

    itemArray.unshift(
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
  }

  render() {
    let todoListDb
    if (this.props.content) {
        todoListDb = this.props.content.map((item) => {
          return <p key={item.todo_id}>{item.list_item}</p>
        })
    }
    else return null

    return (

      <div>
        <br />
        <div className='sticky'>
          <h1><strong>To Do List</strong></h1>
          <div className='todoListMain'>
            <form onSubmit={this.addItem}>
              <input className="toDoHolder" ref={ (a) => this._inputElement = a } placeholder="Make your list!">
              </input>
              <button className='btn btn-primary' type='submit'>add</button>
            </form>
          </div>
          <hr className="stickyHR"/>
          <ul className="list-unstyled">
            {/* <li className="toDoListItem"> */}
              <ToDoItems entries={this.state.items}
              />
            {/* </li> */}
            {todoListDb}
          </ul>
        </div>
        <br />
      </div>
    )
  }
}
export default ToDo
