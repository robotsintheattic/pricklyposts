import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Home from './Home'
// import registerServiceWorker from './registerServiceWorker'
import './index.css'
import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Home}></Route>
      <Route path="/dashboard" component={App}></Route>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
// registerServiceWorker()
