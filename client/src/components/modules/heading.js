import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'
import Check from '../../img/Cactus7_checkicon.png'

class Heading extends Component {
  constructor(props) {
    super(props)

    this.state = {html: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handeClick = this.handleChange.bind(this)
  }

  handleChange = (e) => {
      this.setState({html: e.target.value})
  }

  handleClick = (e) => {
    let content = this.state.html.substring(4, this.state.html.length - 5)
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
    this.setState({html: `<h1>${nextProps.entryModule.content}</h1>`})
  }

  render() {
    return (
      <div>
        <div className="headingH1">
          <ContentEditable
            html={this.state.html}
            disabled={false}
            onChange={this.handleChange}
            className="headingH1"
          />
          <button className="icon-btn headingIcon"><img className="icon" src={Check} onClick={this.handleClick} aria-hidden="true" alt="dancing-cactus"/></button>
        </div>
      </div>
    )
  }
}


export default Heading
