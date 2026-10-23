// Import React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import Redux Provider
import { Provider } from 'react-redux'

// Import React Router
import { BrowserRouter } from 'react-router-dom'

// Import Redux store
import store from './redux/store'

// Import App and CSS
import App from './App.jsx'
import './index.css'
import './App.css'

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Make Redux available to the entire app */}
    <Provider store={store}>
      {/* Enable page navigation */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)