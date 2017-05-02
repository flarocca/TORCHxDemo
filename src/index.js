import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import './css/index.css'
import reducer from './reducers/index'
import App from './containers/App'
import Home from './containers/Home'
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
)

render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" component={Home} >

        </Route>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
