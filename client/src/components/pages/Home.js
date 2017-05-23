import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import  JournalButton from './../buttons/journalButton'
import '../../App.css'
import Logo from '../../Cactus_3.svg'
import Navbar from './../navbar'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {name: '', profilePicture: '', idFromChild: 0, titles: null}

    if (!localStorage.token) {
      window.location.href = '/'
    }
  }

  myCallback = (dataFromChild) => {
    this.setState({id: dataFromChild})
    console.log(this.state)
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
            journals.forEach((item) => {
              journalList.push(<div key={item.id} id={item.id} className="journalDiv col-md-2"><span><img alt="image of a cactus" src={Logo} /></span><Link to={`/journal/${item.id}`}>{item.title}</Link></div>)
            })
            this.setState({titles: journalList})
          })
        })
      })
    })
  }


  render() {
    let userId = this.state.id
    let user = {name: this.state.name, id: this.state.id, profilePicture: this.state.profilePicture}
    if (this.state.id !== 0) {
      return (
          <div>
              <Navbar user={user}/>
              <div className="container">
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="journalDiv col-md-2">
                    <span><img alt="image of cactus" src={Logo} /></span>
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
