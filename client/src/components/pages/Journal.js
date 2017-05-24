import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Journal extends Component {
  constructor(props) {
    super(props)

    this.state = {title: '', todo: ''}
  }

    componentDidMount() {
      // let journal_id = window.location.pathname.split('/')[2]
      let entry_id = window.location.pathname.split('/')[3]
      console.log('e_id', entry_id);
      let entryList = []
        fetch(`/api/entries/${entry_id}`, {
          method: 'GET'
        })
        .then(res => {
          return res.text().then(entry => {
            entry = JSON.parse(entry)
            console.log('entry', entry)

          })
        })
    }
  render() {
      return (
        <div>
          <h1>Journal View (for each individual journal)</h1>
          <p><Link to='journals/'>Home</Link></p>
        </div>
      )
  }
}

export default Journal
