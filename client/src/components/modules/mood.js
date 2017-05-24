import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import ContentEditable from 'react-contenteditable'


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
    let content = this.state.text
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
    this.setState({text: nextProps.entryModule.content})
  }

  render() {
    return (
      <row>
        <div className="col-md-4 vcenter"><font size="5">Today I feel: </font></div>
        <div className="col-md-8 vcenter dashed-box"><ContentEditable
          html={this.state.text}
          disabled={false}
          onChange={this.handleChange}
        />
        </div>
          <span onClick={this.handleClick} className="glyphicon glyphicon-ok" aria-hidden="true"></span>
      </row>
    )
  }
}

export default Mood
