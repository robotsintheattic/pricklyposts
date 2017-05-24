import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class CreateEntry extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    e.preventDefault()
    let e_id = window.location.pathname.split('/')[3]
    let jId = +window.location.pathname.split('/')[2]
    fetch(`/api/journals/${jId}`, {
      method: 'GET'
    }).then((res) => {
      return res.text().then(entries => {
      entries = JSON.parse(entries)
      if (entries.length > 1) {
        fetch(`/api/entries/${e_id}`, {
          method: 'DELETE'
        }).then(() => {
          window.location.href = `/journals`
        })
      } else {
        let body = {title: 'Untitled Post', journal_id: jId}
        fetch('/api/entries', {
          method: 'POST',
          body: JSON.stringify(body),
          credentials: 'same-origin',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          return res.text().then(el => {
            el = JSON.parse(el)
            let entryId = el.e_id
            fetch(`/api/entries_modules/${entryId}`, {
              method: 'POST',
              body: JSON.stringify({
                module_id: 1,
                content: 'Title of your Entry'
              }),
              credentials: 'same-origin',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then(() => {
              
            })
            fetch(`/api/entries_modules/${entryId}`, {
              method: 'POST',
              body: JSON.stringify({
                module_id: 2,
                content: '(enter you mood here)'
              }),
              credentials: 'same-origin',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then(() => {
              
            })
            fetch(`/api/entries_modules/${entryId}`, {
              method: 'POST',
              body: JSON.stringify({
                module_id: 3,
                content: 'Share your thoughts here...'
              }),
              credentials: 'same-origin',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then(() => {
              
            })
            fetch(`/api/entries_modules/${entryId}`, {
              method: 'POST',
              body: JSON.stringify({
                module_id: 4,
                content: 'https://s-media-cache-ak0.pinimg.com/564x/6c/0b/b5/6c0bb58a6a6e8640a247a772fd6bb13e.jpg'
              }),
              credentials: 'same-origin',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then(() => {
              
            })
            fetch(`/api/entries_modules/${entryId}`, {
              method: 'POST',
              body: JSON.stringify({
                module_id: 5,
                content: 'Sample Quote: Ask what makes you come alive and go do it. Because what the world needs is people who have come alive. -Howard Truman'
              }),
              credentials: 'same-origin',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then(() => {
              
            })
            fetch(`/api/entries_modules/${entryId}`, {
              method: 'POST',
              body: JSON.stringify({
                module_id: 6,
                content: 'To Do List'
              }),
              credentials: 'same-origin',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then(() => {
              
            })
          })
        }).then(() => {
          fetch(`/api/entries/${e_id}`, {
            method: 'DELETE'
          }).then(() => {
            window.location.href = `/journals`
          })
        })
      }
    })
    })
  }

  render() {
    return (
      <div className='pull-right'>
          <Button onClick={this.handleClick}>Delete Entry</Button>
      </div>
    )
  }
}

export default CreateEntry
