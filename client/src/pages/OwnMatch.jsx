import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import MatchItem from '../component/MatchItem'
import Spinner from '../component/Spinner'
import { getMatches, reset } from '../features/matches/matchSlice'


function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { matches, isLoading, isError, message } = useSelector(
    (state) => state.matches
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      return navigate('/login')
    }

    dispatch(getMatches())

    // TO Do: read about clean out functions is useEffect

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='pt-3 pb-2 flex flex-col items-center justify-center'>
        <p className="text-2xl">Welcome {user && user.name}</p>
        <p className="text-xl">-Scrim Dashboard-</p>
      </section>

      <section className='pt-10'>
        {matches.length > 0 ? (
          <div className='matches'>
            {matches.map((match) => (
              <div className="pt-2">
                <MatchItem key={match._id}
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
            <p className="text-2xl">You dont have any matches</p>
          </div>
        )}
      </section>
    </>
  )
}

export default Dashboard
