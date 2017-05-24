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
    // fetch('/api/entries_modules', {
    //   method: 'PATCH',
    //   body: JSON.stringify(this.state.html),
    //   credentials: 'same-origin',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({text: nextProps.content})
  }

  render() {
    return (
      <row>
        <div className="col-md-4 vcenter"><font size="5">Today I feel: </font></div>
        <div className="col-md-8 vcenter dashed-box"><ContentEditable
          html={this.state.text}
          disabled={false}
          onChange={this.handleChange}
        /></div>
      </row>
    )
  }
}

export default Mood
