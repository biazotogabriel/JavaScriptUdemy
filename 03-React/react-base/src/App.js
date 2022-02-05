import React from 'react'

import { BrowserRouter } from 'react-router-dom' // Router
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './store/index'
import Rotas from './routes/index'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/Header'
// import history from './services/history'

function App() {
  function handle() {
    console.log('purge')
    persistor.resume()
  }
  return (
    // location={history.location} navigator={history}
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <button onClick={handle} type="button">
            limpa
          </button>
          <Rotas />
          <GlobalStyles />
          <ToastContainer autoClose={4000} className="toast-container" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
