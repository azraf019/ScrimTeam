import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, { useState, useEffect, createContext } from "react";
import { fetchMatches } from "./utils/serviceProvider";
import MatchList from "./component/MatchList";
import PostMatch from "./component/PostMatch";
import { filterAndSort } from "./utils/serviceProvider";

import Header from './component/Header'
import Login from './pages/Login'
import Register from './pages/Register'


export const userContext = createContext({})

function App() {

  // const [matchData, setMatchData] = useState([])

  // useEffect(() => {
  //   try {
  //     fetchMatches().then(matchlist => setMatchData(matchlist)).catch((err) => console.log(err))
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }, [])


  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            {/* <Route path='/' element={<MatchList />} /> */}
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
