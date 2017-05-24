import React, {Component} from 'react'
import ContentEditable from 'react-contenteditable'

class BlockQuote extends Component {
  constructor(props) {
    super(props)

    this.state = {quote: ''}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (e) =>{
    this.setState({html: e.target.value})
  }

  handleClick = () => {
    // console.log('this.state', this.state.quote)
    let data =  this.state.quote
    fetch('/api/entries_modules', {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

  }

  componentWillReceiveProps(nextProps) {
    this.setState({quote: `<p>${nextProps.content}</p>`})
  }

  render() {
    return (
      <div className="quoteblock">
        <blockquote className="quote-box">
          <p className="quote-text">
            <ContentEditable
              html={this.state.quote}
              disabled={false}
              onChange={this.handleChange}/>
          </p>
          <hr />
          <button className="btn btn-primary quotebtn" type="submit" onClick={this.handleClick}>Save</button>
        </blockquote>
      </div>
    )
  }
}


export default BlockQuote
