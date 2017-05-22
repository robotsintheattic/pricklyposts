import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'
import Journals from './Journals'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/journals" component={Journals}></Route>
      <Route path="/journal/:id" component={Journal}></Route>
      <Route path="/entry/:id" component={entry}></Route>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
