import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import ContentEditable from 'react-contenteditable'


class Textfield extends Component {
  constructor(props) {
    super(props)

    this.state = {text: '<p>I\'m holding my entire head together... the skin, and the shell, of me. I\'m falling absolutely inside myself -- but you can see that. You can see the hole. And just because we don\'t know, doesn\'t mean we won\'t know. We just don\'t know yet. But I think one day we will.</p>'}
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

  render() {
    return (
      <div>
        <ContentEditable
          html={this.state.text} // innerHTML of the editable div
          disabled={false}       // use true to disable edition
          onChange={this.handleChange} // handle innerHTML change
        />
      </div>
    )
  }
}

export default Textfield
