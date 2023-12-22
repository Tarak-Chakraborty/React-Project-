import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-3 duration-200
   hover:bg-cyan-200 hover:text-black rounded-full 
   tracking-wider'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn