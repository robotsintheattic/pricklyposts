import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'
import Check from '../../img/Cactus7_checkicon.png'


class Textfield extends Component {
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
    let content = this.state.text.substring(3, this.state.text.length - 4)
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
    this.setState({text: `<p>${nextProps.entryModule.content}</p>`})
  }

  render() {
    return (
      <div>
        <div className="texting">
              <ContentEditable
                html={this.state.text}
                disabled={false}
                onChange={this.handleChange}
              />
            <br></br>
            <button className="icon-btn"><img className="icon" src={Check} onClick={this.handleClick} aria-hidden="true" alt="dancing-cactus"/></button>
        </div>
      </div>
    )
  }
}

export default Textfield
