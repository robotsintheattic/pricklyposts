import React, {Component} from 'react'
import ContentEditable from 'react-contenteditable'

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
    this.setState({html: `<h1>${nextProps.content}</h1>`})
  }

  render() {
    return (
      <div>
        <ContentEditable
          html={this.state.html}
          disabled={false}
          onChange={this.handleChange} 
        />

      </div>
    )
  }
}

        // <span onClick={this.handleClick} className="glyphicon glyphicon-ok" aria-hidden="true"></span>

export default Heading
