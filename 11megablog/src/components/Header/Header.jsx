import React, { useState } from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const navItems = [{
    name:'Home',
    slug:"/",
    active :  true,
    icon: '🏠'
  },{
    name : "Login",
    slug : "/login",
    active : !authStatus,
    icon: '🔐'
  },{
    name : "SignUp",
    slug : "/signup",
    active : !authStatus,
    icon: '📝'
  },{
    name:"All Posts",
    slug : "/all-posts",
    active : authStatus,
    icon: '📚'
  },{
    name:"Add Post",
    slug : "/add-post",
    active : authStatus,
    icon: '✨'
  }]

  const handleNavClick = (slug) => {
    navigate(slug)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className='w-full bg-gradient-to-r from-primary via-secondary to-primary text-white sticky top-0 z-50 shadow-2xl border-b-2 border-accent/30 backdrop-blur-md'>
      <div className='w-full max-w-none'>
        <nav className='flex items-center justify-between px-6 py-4 lg:px-12 xl:px-16'>
          {/* Logo and Brand */}
          <div className='flex items-center gap-4'>
            <Link to="/" className='flex items-center gap-4 group'>
              <div className='transition-all duration-500 group-hover:scale-110 group-hover:rotate-3'>
                <Logo width='70px' />
              </div>
              <span className='hidden sm:inline text-2xl font-bold tracking-wider bg-gradient-to-r from-white via-blush to-white bg-clip-text text-transparent group-hover:from-blush group-hover:to-white transition-all duration-500'>
                NebulaPress
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-3'>
            {navItems.map((item) =>
              item.active ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.slug)}
                  className='group relative px-6 py-3 rounded-2xl font-semibold text-lg transition-all duration-500 ease-out hover:bg-white/15 hover:scale-105 active:scale-95 border-2 border-transparent hover:border-white/30 backdrop-blur-sm overflow-hidden'
                >
                  {/* Background gradient on hover */}
                  <div className='absolute inset-0 bg-gradient-to-r from-accent/20 to-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl'></div>
                  
                  {/* Content */}
                  <div className='relative flex items-center gap-3'>
                    <span className='text-xl group-hover:scale-110 transition-transform duration-300'>{item.icon}</span>
                    <span className='group-hover:translate-x-1 transition-transform duration-300'>{item.name}</span>
                  </div>
                  
                  {/* Bottom border animation */}
                  <div className='absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-blush to-white group-hover:w-full group-hover:left-0 transition-all duration-500 rounded-full'></div>
                </button>
              ) : null
            )}
            {authStatus && (
              <div className='ml-4'>
                <LogoutBtn />
              </div>
            )}
          </div>

          {/* Tablet Navigation (simplified) */}
          <div className='hidden md:flex lg:hidden items-center space-x-2'>
            {navItems.slice(0, 3).map((item) =>
              item.active ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.slug)}
                  className='px-4 py-2.5 rounded-xl font-medium transition-all duration-300 hover:bg-white/15 hover:scale-105 active:scale-95 border border-transparent hover:border-white/20'
                >
                  <span className='text-lg'>{item.icon}</span>
                </button>
              ) : null
            )}
            {authStatus && (
              <div className='ml-2'>
                <LogoutBtn />
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='lg:hidden p-3 rounded-xl hover:bg-white/15 transition-all duration-300 group'
          >
            <div className='w-6 h-6 flex flex-col justify-center items-center'>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-500 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'} group-hover:bg-blush`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'} group-hover:bg-blush`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-500 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'} group-hover:bg-blush`}></span>
            </div>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className='px-6 pb-6 space-y-3 bg-gradient-to-b from-primary/95 to-secondary/95 backdrop-blur-md border-t-2 border-accent/30'>
            {navItems.map((item) =>
              item.active ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.slug)}
                  className='w-full text-left px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 ease-out hover:bg-white/15 hover:translate-x-3 border-2 border-transparent hover:border-white/30 group'
                >
                  <div className='flex items-center gap-4'>
                    <span className='text-2xl group-hover:scale-110 transition-transform duration-300'>{item.icon}</span>
                    <span className='group-hover:translate-x-2 transition-transform duration-300'>{item.name}</span>
                  </div>
                </button>
              ) : null
            )}
            {authStatus && (
              <div className='pt-4 border-t-2 border-white/20'>
                <LogoutBtn />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 
