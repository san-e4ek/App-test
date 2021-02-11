import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Router } from 'react-router-dom'
import { createHashHistory } from 'history'
import reportWebVitals from './reportWebVitals'

import App from './App'

import './styles/index.scss'

const history = createHashHistory()

render(
  <React.StrictMode>
    <BrowserRouter>
      <Router history={history}>
        <App />
      </Router>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
