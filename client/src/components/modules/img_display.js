import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import $ from 'jquery'
import Check from '../../Cactus7_checkicon.png'

class ImgDisplay extends Component {
  constructor(props) {
    super(props)

    this.handeClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    let content = $('#instagram-journal').attr('src')
    fetch(`/api/entries_modules/${this.props.entryModule.em_id}`, {
      method: 'PATCH',
      body: JSON.stringify({content: content}),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  render() {

    return (
      <div>
        <img className="instagram" id="instagram-journal" src={this.props.entryModule.content} alt="instagram"/>
        <br></br><br></br>
        <button className="icon-btn checking"><img className="icon" src={Check} onClick={this.handleClick} aria-hidden="true"/></button>
      </div>
    )

  }

}

export default ImgDisplay
