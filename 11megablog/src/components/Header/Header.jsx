import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems = [{
    name:'Home',
    slug:"/",
    active :  true 
  },{
    name : "login",
    slug : "/login",
    active : !authStatus
  },{
    name : "SignUp",
    slug : "/signup",
    active : !authStatus
  },{
    name:"All Blogs",
    slug : "/all-posts",
    active : authStatus
  },{
    name:"add post",
    slug : "/add-post",
    active : authStatus
  },{
  }]
  return (
    <header className='py-3 shadow-soft bg-primary text-white sticky top-0 z-30'>
    <Container>
      <nav className='flex'>
        <div className='mr-4 flex items-center gap-3'>
          <Link to="/">
            <Logo width='75px' />
          </Link>
          <span className='hidden sm:inline text-lg font-semibold tracking-wide'>NebulaPress</span>
        </div>
        <ul className='flex ml-auto'>
        {
          navItems.map((item)=>
          item.active ? (
            <li key = {item.name}>
            <button 
            onClick={()=> navigate(item.slug)} 
            className='inline-block px-4 py-2 duration-300 ease-smooth hover:bg-secondary hover:text-white rounded h-full'>
              {item.name}
            </button>

            </li>

          ): null )
        }
        {
          //cpmmon syntax it means if authstatius is true then only the statement in bracket will run else not
          authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )
        }

        </ul>
      </nav>
    </Container>
    </header>
  )
}

export default Header
// logout butn tb dikhayenge jab login hoga 
