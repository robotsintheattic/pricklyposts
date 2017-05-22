import React, {Component} from 'react'
import ContentEditable from 'react-contenteditable'
class BlockQuote extends Component {
  constructor(props) {
    super(props)

    this.state = {html: '<blockquote> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi lacus, auctor sit amet purus vel, gravida luctus lectus. Aenean rhoncus dapibus enim, sit amet faucibus leo ornare vitae. <br> —<cite>Some People</cite> </blockquote>'}
    console.log('1', this.state.html)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (e) =>{
    this.setState({html: e.target.value})
  }

  handleClick = () => {
    console.log('this.state', this.state.html)
    let data =  this.state.html
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



  render() {
    return  <div>
        <ContentEditable
              html={this.state.html}
              disabled={false}
              onChange={this.handleChange}
            />
            <button type="submit" onClick={this.handleClick}>Save</button>
        </div>
  }
}


export default BlockQuote
