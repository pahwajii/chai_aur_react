import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authslice'

function LogoutBtn() {
  const dispatch = useDispatch()

  const logouthandler = () => {
    authService.logout().then(()=>{
      dispatch(logout())
    })
  }
  return (
    <button className='inline-bock px-6 py-2 duratation-200 hover:bg-blue-200 rounded - h-full'
    onClick={logouthandler}>
      Logout
    </button>
  )
}

export default LogoutBtn
