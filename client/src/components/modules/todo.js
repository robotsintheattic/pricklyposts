import React, { Component } from 'react'
import $ from 'jquery'
import Plus from '../../img/Cactus1_plusicon.png'

class ToDoItems extends Component {
  render() {
    let todoEntries = this.props.entries

    function createTasks(item){
      return <p className="crossItem" key={item.key} id={item.key}>{item.text}</p>
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
      this.crossOut = this.crossOut.bind(this)
  }

  addItem(e) {
    e.preventDefault()
    let itemArray = this.state.items

    fetch(`/api/entries_modules/todos`, {
      method: 'POST',
      body: JSON.stringify({
        entries_modules_id: this.props.entryModule[0].em_id,
        list_item: this._inputElement.value
      }),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return res.text().then(todo => {
        todo = JSON.parse(todo)
        console.log('here', todo)
      itemArray.unshift(
        {
          text: this._inputElement.value,
          key: todo[0].id
        }
      )
      this.setState({
        items: itemArray
      })
      this._inputElement.value = ""
    })
    })

  }

  crossOut (e) {
    if ($(e.target).hasClass('crossItem')) {
      let id
      if ($(e.target).hasClass('finished')) {
        $(e.target).removeClass('finished')
        id = $(e.target).attr('id')
        fetch(`/api/entries_modules/todos/${id}`, {
          method: 'PATCH',
          body: JSON.stringify({
            finished: false
          }),
          credentials: 'same-origin',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
      } else {
        $(e.target).addClass('finished')
        id = $(e.target).attr('id')
        fetch(`/api/entries_modules/todos/${id}`, {
          method: 'PATCH',
          body: JSON.stringify({
            finished: true
          }),
          credentials: 'same-origin',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
      }
    }
  }

  render() {
    let todoListDb

    if (this.props.entryModule) {
        todoListDb = this.props.entryModule.map((item) => {
          if (item.finished === false) {
            return <p className="toDoListItem crossItem" key={item.todo_id} id={item.todo_id}>{item.list_item} </p>
          } else {
            return <p className="toDoListItem finished crossItem" key={item.todo_id} id={item.todo_id}>{item.list_item} </p>
          }
        })
    }
    else return null

    return (
      <div>
        <br />
        <div>
          <div className='todoListMain'>
            <form onSubmit={this.addItem}>
              <input className="toDoHolder" ref={ (a) => this._inputElement = a } placeholder="create a list">
              </input>
              <button type='submit'><img className="icon icon-btn-square-sm" src={Plus} alt='dancing cactus' /></button>
            </form>
          </div>
          <hr className="stickyHR"/>
          <div className="list-unstyled" onClick={this.crossOut}>
              <ToDoItems entries={this.state.items}
              />
            {todoListDb}
          </div>
        </div>
        <br />
      </div>
    )
  }
}
export default ToDo
