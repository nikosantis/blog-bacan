import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { App } from './components/App'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'

const store = createStore(
  reducers, //All reducers
  {}, //Initial state
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
