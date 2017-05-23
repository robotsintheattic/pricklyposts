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
      let journal_id = window.location.pathname.split('/')[2]
      // console.log(journal_id);
      let entryList = []
        fetch(`/api/entries/journals/${journal_id}`, {
          method: 'GET'
        })
        .then(res => {
          return res.text().then(entry => {
            console.log("1", entry);
            entry = JSON.parse(entry)
            console.log("2", entry);
            console.log("entry id", entry.id);
            this.setState({
              content: entry[0],
              entry_id: entry[1],
              font: entry[2],
              id: entry[3],
              journal_id: entry[4],
              module_id: entry[5],
              title: entry[6],
              type: entry[7]
            })

            fetch(`/api/entries_modules/${this.state.entry_id}`, {
              method: 'GET'
            })
            .then(result => {
              return result.text().then(module => {
                // console.log("module 1", module);
                module = JSON.parse(module)
                // console.log("module 2", module);

                module.forEach((item) => {
                  entryList.push(<p key={item.id} id={item.id} className="journalDiv col-md-2">{item.content}</p>)
                })
                this.setState({content: entryList})
              })
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
              <div>{this.state.content}</div>
          </div>
      )
  }
}

export default Journal
