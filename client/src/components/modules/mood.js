import React, { Component } from 'react'
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
    let content = this.state.text.substring(5, this.state.text.length - 6)
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
        <div className="col-md-5 vcenter">
          <h2>Today I feel:</h2>
        </div>
        <div className="col-md-5 vcenter dashed-box">
          <div className="inlineBox">
            <ContentEditable
            html={this.state.text}
            disabled={false}
            onChange={this.handleChange}
            />
          </div>
          <span onClick={this.handleClick} className="glyphicon glyphicon-ok" aria-hidden="true">
          </span>
        </div>
      </div>
    )
  }
}

export default Mood
