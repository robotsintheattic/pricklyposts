import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import  EntryButton from './../buttons/entryButton'

class Journal extends Component {
  constructor(props) {
    super(props)

    this.state = {title: ''}
  }

    componentDidMount() {
      // console.log(window.location.pathname)
      let id = window.location.pathname.split('/')[2]
      // console.log(id);
      let entryData = ''
        fetch('/api/entries', {
          method: 'GET',
          credentials: 'same-origin',
        })
        .then(res => {
          return res.text().then(entry => {
            // console.log(entry);
            entry = JSON.parse(entry)
            console.log(entry);
            console.log(entry[0].journal_id);

            function isJournalId(value) {
              if (value == id) {
                
              }
            }

            let individual = entry.filter((isJournalId) => {
              return (
                this.setState({
                  title: entry[0]
                })

              )
            })

          })
        })
    }


  render() {
      return (
          <div>
              <h1>Journal View (for each individual journal)</h1>
              <p><Link to='journals/'>Home</Link></p>
              <EntryButton />
              <h1>{this.state.title}</h1>
          </div>
      )
  }
}

export default Journal
