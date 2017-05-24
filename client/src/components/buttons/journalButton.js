import React, { Component } from 'react'

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
        let jId = el[0].id
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
                content: 'This is the entry title.'
              }),
              credentials: 'same-origin',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then(() => {
              console.log('');
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
              console.log('');
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
              console.log('');
            })
            fetch(`/api/entries_modules/${entryId}`, {
              method: 'POST',
              body: JSON.stringify({
                module_id: 4,
                content: ''
              }),
              credentials: 'same-origin',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then(() => {
              console.log('');
            })
            fetch(`/api/entries_modules/${entryId}`, {
              method: 'POST',
              body: JSON.stringify({
                module_id: 5,
                content: 'What quote is inspiring you today?'
              }),
              credentials: 'same-origin',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then(() => {
              console.log('');
            })
            fetch(`/api/entries_modules/${entryId}`, {
              method: 'POST',
              body: JSON.stringify({
                module_id: 6,
                content: 'What needs to be done?'
              }),
              credentials: 'same-origin',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then(() => {
              console.log('');
            })
            window.location.href = `/journal/${jId}/${el.e_id}`
          })
        })
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
