import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import  JournalButton from './../buttons/journalButton'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {name: '', profilePicture: '', id: 0, titles: null}

    if (!localStorage.token) {
      window.location.href = '/'
    }
  }

  componentDidMount() {
    let userData = ''
    var journalList = []
    $.ajax({
      method: 'get',
      url: `https://api.instagram.com/v1/users/self/?access_token=${localStorage.token}`,
      dataType: 'jsonp',
      success: function(result) {
        userData = {
          fullName: result.data.full_name,
          instagramId: result.data.id,
          userName: result.data.username,
          profilePicture: result.data.profile_picture
        }
      },
      error: function(err) {
        console.log(err);
      }
    }).then(() => {
      // AND HERE ON MONDAY
      fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(userData),
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        return res.text().then(user => {
          user = JSON.parse(user)
          this.setState({name: user[0], profilePicture: user[1], id: user[2]})
        })
      }).then(() => {
        fetch(`/api/journals/users/${this.state.id}`, {
          method: 'GET'
        }).then((res) => {
          return res.text().then(journals => {
            journals = JSON.parse(journals)
            console.log('here;', journals)
            journals.forEach((item) => {
              console.log(item.id)
              journalList.push(<li key={item.id} id={item.id}><Link to={`/journal/${item.id}`}>{item.title}</Link></li>)
            })
            this.setState({titles: journalList})
          })
        })
      })
    })
  }

  render() {
      return (
          <div>
              <h1>{this.state.name}'s Journals</h1>
              <img src={this.state.profilePicture}/><br/>
              <Link to='/'>Home</Link>
              <ul>{this.state.titles}</ul>
              <JournalButton />
          </div>
      )
  }
}

export default Home
