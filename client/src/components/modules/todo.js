import React, {Component} from 'react'
import { Button } from 'react-bootstrap'

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
    e.preventDefault()
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
    })
    
    this._inputElement.value = ""
  }


  render() {
    let todoListDb

    if (this.props.entryModule) {
        todoListDb = this.props.entryModule.map((item) => {
          return <p className="toDoListItem" key={item.todo_id}>{item.list_item}</p>
        })
    }
    else return null

    return (
      <div>
        <br />
        <div>
          <div className='todoListMain'>
            <form onSubmit={this.addItem}>
              <input className="toDoHolder" ref={ (a) => this._inputElement = a } placeholder="Make your list!">
              </input>
              <Button type='submit'><span className="glyphicon glyphicon-ok" aria-hidden="true"></span></Button>
            </form>
          </div>
          <hr className="stickyHR"/>
          <div className="list-unstyled">
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
