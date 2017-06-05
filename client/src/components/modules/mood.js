import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'
import Check from '../../img/Cactus7_checkicon.png'


class Mood extends Component {
  constructor(props) {
    super(props)

    this.state = {text: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handeClick = this.handleChange.bind(this)
  }

  handleChange = (e) => {
      this.setState({text: e.target.value})
  }

  handleClick = (e) => {
    let content = this.state.text.substring(4, this.state.text.length - 5)
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

  componentWillReceiveProps(nextProps) {
    this.setState({text: `<h2>${nextProps.entryModule.content}</h2>`})
  }

  render() {
    return (
      <div>
      <row>
        <div className="mood-container">
          <h2 className="content-mood">I feel:&nbsp;&nbsp;</h2>
          <ContentEditable
          html={this.state.text}
          disabled={false}
          onChange={this.handleChange}
          className="content-mood"
          />
          <button className="icon-btn iconMood"><img className="icon" src={Check} onClick={this.handleClick} aria-hidden="true" alt="dancing-cactus"/></button>
        </div>
      </row>
      </div>
    )
  }
}

export default Mood
