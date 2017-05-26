import React, {Component} from 'react'
import ContentEditable from 'react-contenteditable'
import Check from '../../Cactus7_checkicon.png'

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
          <br></br>
          <button className="icon-btn"><img className="icon" src={Check} onClick={this.handleClick} aria-hidden="true"/></button>
        </blockquote>
      </div>
    )
  }
}


export default BlockQuote
