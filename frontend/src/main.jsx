import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginComponent from './components/LoginComponent.jsx'
import SignupComponent from './components/SignupComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <LoginComponent/>
    <SignupComponent/>
  </div>

)
