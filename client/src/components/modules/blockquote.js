import React, {Component} from 'react'
import ContentEditable from 'react-contenteditable'

class BlockQuote extends Component {
  constructor(props) {
    super(props)

    this.state = {quote: ''}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (e) =>{
    this.setState({quote: e.target.value})
  }

  handleClick = (e) => {
    let content = this.state.quote.substring(3, this.state.quote.length - 4)
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
    this.setState({quote: `<p>${nextProps.entryModule.content}</p>`})
  }

  render() {
    return (
      <div>
        <blockquote className="quote-box">
          <div className="quote-text">
            <ContentEditable
              html={this.state.quote}
              disabled={false}
              onChange={this.handleChange}/>
          </div>
          <span onClick={this.handleClick} className="glyphicon glyphicon-ok quotebtn" aria-hidden="true"></span>
        </blockquote>
      </div>
    )
  }
}


export default BlockQuote
