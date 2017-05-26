import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'
import Check from '../../Cactus7_checkicon.png'


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
        <div className="col-md-4 vcenter">
          <h3 vertical-align="bottom">Today I feel:</h3>
        </div>
        <div className="col-md-6 vcenter dashed-box">
          <ContentEditable
          html={this.state.text}
          disabled={false}
          onChange={this.handleChange}
          vertical-align="top"
          />
          <button className="icon-btn"><img className="icon" src={Check} onClick={this.handleClick} aria-hidden="true"/></button>
        </div>
      </row>
      </div>
    )
  }
}

export default Mood
