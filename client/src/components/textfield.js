import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'


class Textfield extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 'Please write something about your day.'
    }

    // componentDidMount() {
    //
    // }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('A note was submitted: ', this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Note:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Save" />
      </form>
    )
  }
}

export default Textfield
