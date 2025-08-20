import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authslice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logouthandler = () => {
        dispatch(logout())
        navigate("/")
    }

    return (
        <button 
            className='group relative px-6 py-3 rounded-2xl font-semibold text-lg transition-all duration-500 ease-out hover:bg-red-500/20 hover:scale-105 active:scale-95 border-2 border-transparent hover:border-red-400/40 backdrop-blur-sm overflow-hidden'
            onClick={logouthandler}
        >
            {/* Background gradient on hover */}
            <div className='absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl'></div>
            
            {/* Content */}
            <div className='relative flex items-center gap-3'>
                <span className='text-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300'>🚪</span>
                <span className='group-hover:translate-x-1 transition-transform duration-300'>Logout</span>
            </div>
            
            {/* Bottom border animation */}
            <div className='absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-red-400 to-red-300 group-hover:w-full group-hover:left-0 transition-all duration-500 rounded-full'></div>
        </button>
    )
}

export default LogoutBtn
