import React, {Component} from 'react'
import ContentEditable from 'react-contenteditable'

class Heading extends Component {
  constructor(props) {
    super(props)

    this.state = {html: '<h1>Hello World</h1>'}
    this.handleChange = this.handleChange.bind(this)
    this.handeClick = this.handleChange.bind(this)
  }

  handleChange = (e) => {
      this.setState({html: e.target.value})
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
    return <div>
        <ContentEditable
          html={this.state.html} // innerHTML of the editable div
          disabled={false}       // use true to disable edition
          onChange={this.handleChange} // handle innerHTML change
        />
        <span onClick={this.handleClick} className="glyphicon glyphicon-ok" aria-hidden="true"></span>
      </div>
  }
}


export default Heading
