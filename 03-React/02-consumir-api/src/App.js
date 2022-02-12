import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './store/index'
import Rotas from './routes/index'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/Header'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Rotas />
          <GlobalStyles />
          <ToastContainer autoClose={4000} className="toast-container" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
