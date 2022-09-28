import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, { useState, useEffect, createContext } from "react";

import Header from './component/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/OwnMatch'
import OwnMatch from './pages/Dashboard'
import ChatPage from './pages/ChatPage';


export const userContext = createContext({})

function App() {


  return (
    <>
      <Router>
        <div className='min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500'>
          <Header />
          <Routes>

            <Route path='/' element={<OwnMatch />} />
            <Route path='/chat' element={<ChatPage />} />
            <Route path='/allScrims' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
