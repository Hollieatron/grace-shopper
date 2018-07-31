import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
// import store from './store'
import App from './app'
import {PersistGate} from 'redux-persist/lib/integration/react'
import store, {persistor} from './store'

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
)
