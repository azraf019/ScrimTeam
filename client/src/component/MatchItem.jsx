import { useDispatch } from 'react-redux'
import { deleteMatch, updateMatch } from '../features/matches/matchSlice'
import moment from 'moment'
import './MatchItem.css'

function MatchItem({ match, id, teamName, rank, server, date, description, booking }) {
  const dispatch = useDispatch()


  return (
    <section>
      <div className='flex bg-slate-100 px-6 pt-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-4xl sm:rounded-lg '>
        <div className='flex items-center justify-between pt-2'>
          <div className=" flex mb-6 pr-5" >
            <div className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Team: {teamName}
            </div>
          </div>
          <div className=" flex mb-6 pr-5" >
            <div className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Date: {moment(date).format("Do MMM YY")}
            </div>
          </div>
          <div className="mb-6 pr-5" >
            <div className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Avg Rank: {rank}
            </div>
          </div>
          <div className="mb-6 pr-5 pl-3" >
            <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => dispatch(deleteMatch(match._id))} >
              delete
            </button>
          </div>
          <div>
            {booking ? (
              <div className="mb-6 pr-5 pl-10">
                <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => { dispatch(updateMatch({ id: match._id, body: { booking: true } })); window.location.reload(); }} >
                  BOOKED
                </button>
              </div>) :
              (<div className="mb-6 pr-5 pl-2" >
                <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => { dispatch(updateMatch({ id: match._id, body: { booking: true } })); window.location.reload(); }}>
                  OPEN
                </button>
              </div>)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default MatchItem
