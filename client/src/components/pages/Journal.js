import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import  EntryButton from './../buttons/entryButton'
import ToDo from './../modules/todo'

class Journal extends Component {
  constructor(props) {
    super(props)

    this.state = {title: '', todo: ''}
  }

    componentDidMount() {
      // console.log(window.location.pathname)
      let journal_id = window.location.pathname.split('/')[2]
      // console.log(journal_id);
      let entryList = []
        fetch(`/api/entries/journals/${journal_id}`, {
          method: 'GET'
        })
        .then(res => {
          return res.text().then(entry => {
            entry = JSON.parse(entry)
            entry.forEach((obj) => {
              if (obj.module_id === 1) {
                this.setState({
                  todo: obj
                })
              }
            })
          })
        })
    }
  render() {
    let todo = this.state.todo
    // console.log(todo);
    if (this.state.obj !== '') {
      return (
        <div>
          <h1>Journal View (for each individual journal)</h1>
          <p><Link to='journals/'>Home</Link></p>
          <EntryButton />
          <ToDo todo={todo} />
        </div>
      )
    }
  }
}

export default Journal
