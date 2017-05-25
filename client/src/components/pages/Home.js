import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import  JournalButton from './../buttons/journalButton'
import '../../App.css'
import ExistingJournals from '../../img/Cactus_4.png'
import NewJournal from '../../img/Cactus_5.png'
import Navbar from './../navbar'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {name: '', profilePicture: '', id: '', titles: null}

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
          localStorage.setItem('userId', user[2])
          localStorage.setItem('userName', user[0])
          localStorage.setItem('userPic', user[1])
        })
      }).then(() => {
        fetch(`/api/journals/users/${this.state.id}`, {
          method: 'GET'
        }).then((res) => {
          return res.text().then(journals => {
            journals = JSON.parse(journals)
            let journal_ids = []
            journals.forEach((item) => {
              if (!journal_ids.includes(item.j_id)) {
                journal_ids.push(item.j_id)
                journalList.push(<div key={item.j_id} id={item.j_id} className="journalDiv col-md-2"><span><img className="journalImg" alt="cactus" src={ExistingJournals} /></span><br /><br /><Link className="journalLink" to={`/journal/${item.j_id}/${item.e_id}`}>{item.j_title}</Link></div>)
              }
            })

            this.setState({titles: journalList})
          }).then(() => {

          })
        })
      })
    })
  }


  render() {
    let userId = this.state.id
    if (this.state.id !== 0) {
      return (
          <div>
              <Navbar />
              <div className="container">
                <div className="row journalRow">
                  <div className="journalDiv col-md-2">
                    <span><img className="journalImg" alt="cactus" src={NewJournal} /></span><br /><br />
                    <JournalButton userId={userId} />
                  </div>
                  <div>{this.state.titles}</div>
                </div>
                </div>
          </div>
      )
    }
  }
}

export default Home
