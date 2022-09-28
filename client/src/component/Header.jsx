import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import Logo from '../images/controller.png'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }


  return (
    <header className='h-20 w-screen  dark:bg-gray-800'>
      <div className='pt-4 p-2 pl-7 flex items-center justify-between'>
        <div className='pl-5 flex items-center jusify-between'>
          <img className="h-10 w-10 mr-5" src={Logo} alt="logo" />
          <div >
            <Link className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" to='/'>Find Scrim</Link>
          </div >
          <div className='pl-2' >
            <Link className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" to='/allScrims'>Your Scrims</Link>
          </div>
        </div>

        <div className='p-2 pl-10 pr-10 flex items-start jusify-between'>
          {user ? (
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2" onClick={onLogout}>
              Logout
            </button>

          ) : (
            <div className='flex pr-4'>
              <div className='pr-5' >
                <Link className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" to='/login'>
                  Login
                </Link>
              </div>
              <div >
                <Link className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" to='/register'>
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header >
  )
}

export default Header
