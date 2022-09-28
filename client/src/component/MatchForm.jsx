import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createMatch, reset } from '../features/matches/matchSlice'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'




function MatchForm() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const addingMatch = (match) => {
    match.preventDefault();
    const addText = { teamName: match.target.teamName.value, date: match.target.Date.value, server: match.target.server.value, rank: match.target.rank.value, booking: false, email: user.email };

    match.target.teamName.value = "";
    match.target.Date.value = "";
    match.target.server.value = "";
    match.target.rank.value = "";

    if (!user) {
      return navigate('/login')
    }


    dispatch(createMatch(addText))
    dispatch(reset())
    window.location.reload();

  }


  return (

    <section >
      <div className='flex bg-slate-100 px-6 pt-2 pb-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-4xl sm:rounded-lg '>
        <form onSubmit={addingMatch}>
          <div className='flex justify-between'>
            <div className="mb-6 pr-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600" htmlFor="teamName" required>
                Team Name
              </label>
              <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" name='teamName' id="teamName" type="text" placeholder="insert a team name" />
            </div>
            <div className="mb-6 pr-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600" htmlFor="Date">
                DATE
              </label>
              <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" name='Date' id="date" type="datetime-local" placeholder="date" required />
            </div>
            <div className="mb-6 pr-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600" htmlFor="rank">
                Avg Team Rank
              </label>
              <select className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" name='rank'>
                <option value="Radiant">Radiant</option>
                <option value="Immortal">Immortal</option>
                <option value="Asscendent">Asscendent</option>
                <option value="Diamond">Diamond</option>
                <option value="Platinum">Platinum</option>
                <option value="Gold">Gold</option>
                <option value="Silver">Silver</option>
                <option value="Bronze">Singapore</option>
                <option value="Iron">Hongkong</option>

              </select>
            </div>
            <div className="mb-6 pr-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600" htmlFor="server">
                SERVER
              </label>
              <select className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" name='server'>
                <option value="Hongkong">Hongkong</option>
                <option value="Singapore">Singapore</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Sydney">Sydney</option>
              </select>
            </div>
            <div className='pt-7 pl-12'>
              <button class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type='submit'>
                Add
              </button>
            </div>

          </div>
        </form>
      </div>
    </section>
  )
}

export default MatchForm


//   < form >
//   <div className="mb-6">
//     <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
//     <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required="">
//   </div>
//   <div className="mb-6">
//     <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
//     <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="">
//   </div>
//   <div className="mb-6">
//     <label for="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Repeat password</label>
//     <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="">
//   </div>
//   <div className="flex items-start mb-6">
//     <div className="flex items-center h-5">
//       <input id="terms" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="">
//     </div>
//     <label for="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
//   </div>
//   <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
// </form >
