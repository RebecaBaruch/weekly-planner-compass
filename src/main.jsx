import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { RegisterProvider } from './context/register-hook';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RegisterProvider>
      <App />
    </RegisterProvider>
  </React.StrictMode>,
)
