import React from 'react'
import ReactDOM from 'react-dom'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import Journal from './components/pages/Journal'


import registerServiceWorker from './registerServiceWorker'
import './index.css'
import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/journals" component={Home}></Route>
      <Route path="/journal/" component={Journal}></Route>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
