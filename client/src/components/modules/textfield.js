import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import ContentEditable from 'react-contenteditable'


class Textfield extends Component {
  constructor(props) {
    super(props)

    this.state = {text: '<p>Hello World</p>'}
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
        <span onClick={this.handleClick} className="glyphicon glyphicon-ok" aria-hidden="true"></span>
      </div>
    )
  }
}
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       value: 'Please write something about your day.'
//     }
//
//     // componentDidMount() {
//     //
//     // }
//
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//
//   handleChange(e) {
//     this.setState({
//       value: e.target.value
//     })
//   }
//
//   handleSubmit(e) {
//     e.preventDefault()
//     console.log('A note was submitted: ', this.state.value)
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Note:
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Save" />
//       </form>
//     )
//   }
// }

export default Textfield
