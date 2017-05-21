import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>On the dashboard</h1>
                <Link to='/'>Home</Link>
            </div>
        )
    }
}

export default Dashboard
