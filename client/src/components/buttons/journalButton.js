import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class JournalButton extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick = (e) => {
    e.preventDefault()
    let post = {
      title: 'Untitled Post',
      user_id: localStorage.userId,
    }

    fetch('/api/journals', {
      method: 'POST',
      body: JSON.stringify(post),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return res.text().then(el => {
        el = JSON.parse(el)
        window.location.href = `/journal/${el[0].id}`
      })
    })
  }

  render() {
    return (
      <div>
        <a onClick={this.handleClick}>+ New Journal</a>
      </div>
    )
  }
}

export default JournalButton
