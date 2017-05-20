import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './state/configureStore'
import Navigation from './views/containers/Navigation'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
)

export default App
