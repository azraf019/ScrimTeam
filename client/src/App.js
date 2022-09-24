import React, { useState, useEffect, createContext } from "react";
import { fetchMatches } from "./utils/serviceProvider";
import MatchList from "./component/MatchList";
import PostMatch from "./component/PostMatch";
import { filterAndSort } from "./utils/serviceProvider";

import './App.css';

export const userContext = createContext({})

function App() {

  const [matchData, setMatchData] = useState([])

  useEffect(() => {
    try {
      fetchMatches().then(matchlist => setMatchData(matchlist)).catch((err) => console.log(err))
    } catch (err) {
      console.log(err)
    }
  }, [])


  return (
    <userContext.Provider value={{ matchData, setMatchData }}>
      <div className="App">
        <PostMatch></PostMatch>
        <MatchList></MatchList>
      </div>
    </userContext.Provider>
  );
}

export default App;
