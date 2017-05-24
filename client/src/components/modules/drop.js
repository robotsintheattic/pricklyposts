import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Draggable, Droppable } from 'react-drag-and-drop'

class Drop extends Component{
  render() {
  return (
    <div>
        <Droppable
            types={['insta']}
            onDrop={this.onDrop.bind(this)}>
        </Droppable>
    </div>
  )
}
onDrop(data) {
    console.log(data)
}
}

export default Drop
