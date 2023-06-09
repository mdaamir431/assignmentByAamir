import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigations from './Routes/Navigations'

const App = () => {
  return (
    <div>
      <Navigations/>
      <ToastContainer/>
    </div>
  )
}

export default App
