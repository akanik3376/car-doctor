import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './MainRoot/Root.jsx'
import AuthProvider from './Provoidor/AuthProvidor'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-5xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />

      </AuthProvider>
    </React.StrictMode>,
  </div>
)
