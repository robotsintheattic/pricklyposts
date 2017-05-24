import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

class Journal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      todo: '',
      journal_id: window.location.pathname.split('/')[2],
      entry_id: window.location.pathname.split('/')[3],
      entryArr: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({journal_id: window.location.pathname.split('/')[2]})
  }

  componentDidMount() {
    fetch(`/api/journals/${this.state.journal_id}`, {
      method: 'GET'
    }).then(res => {
      return res.text().then(entries => {
        let entryArr = JSON.parse(entries).map(entry => {
          return entry.id
        })
        this.setState({entryArr: entryArr})
      })
    })
  }

  componentDidUpdate(prevState) {
    let entry_id = +window.location.pathname.split('/')[3]

    fetch(`/api/entries/${entry_id}`, {
      method: 'GET'
    })
    .then(res => {
      return res.text().then(entry => {
        entry = JSON.parse(entry)
      })
    })
  }

  render() {
    // Handling logic of moving through entry arr to find prev and next entries
    let entry_id = +window.location.pathname.split('/')[3]

    let previous_entry = this.state.entryArr[this.state.entryArr.indexOf(entry_id) + 1]
    let next_entry = this.state.entryArr[this.state.entryArr.indexOf(entry_id) - 1]

    let prev = entry_id
    let next = entry_id

    if (previous_entry) prev = previous_entry
    if (next_entry) next = next_entry

    return (
      <div>
        <h1>Journal View (for each individual journal)</h1>

        <p><Link to='journals/'>Home</Link></p>
        <Button onClick={this.handleClick}><Link to={`/journal/${this.state.journal_id}/${prev}`}>Previous Entry</Link></Button>
        <Button onClick={this.handleClick}><Link to={`/journal/${this.state.journal_id}/${next}`}>Next Entry</Link></Button>

      </div>
    )
  }
}

export default Journal
