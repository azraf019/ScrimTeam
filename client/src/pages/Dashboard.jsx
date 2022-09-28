import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import MatchList from '../component/MatchList'

import { fetchMatches } from "../utils/serviceProvider";
import { reset } from '../features/matches/matchSlice'

import MatchForm from "../component/MatchForm";

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { matches, isLoading, isError, message } = useSelector(
    (state) => state.matches
  )

  const [matchData, setMatchData] = useState([]);


  useEffect(() => {
    try {
      if (isError) {
        console.log(message)
      }

      fetchMatches().then(datalist => setMatchData(datalist));

      return () => {
        dispatch(reset())
      }

    } catch (error) {
      console.log(error)
    }

  }, [user, navigate, isError, message, dispatch])


  return (
    <>
      <section className='pt-3 pb-2 flex flex-col items-center justify-center'>
        <p className="text-2xl">Welcome {user && user.name}</p>
        <p className="text-xl">-Scrim Dashboard-</p>
      </section>
      <MatchForm />
      <section className='pt-10'>
        {matchData.length > 0 ? (
          <div >
            {matchData.map((match) => (
              <div className="pt-2">
                <MatchList key={match._id}
                  email={match.email}
                  match={match}
                  teamName={match.teamName}
                  id={match._id}
                  date={match.date}
                  server={match.server}
                  rank={match.rank}
                  description={match.description}
                  booking={match.booking} />
              </div>
            ))}
          </div>
        ) : (
          <div className='pt-3 pb-2 flex flex-col items-center justify-center'>
            <p className="text-2xl">There are no Scrims currently</p>
          </div>
        )}
      </section>
    </>
  )
}

export default Dashboard
