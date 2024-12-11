
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black d-flex h-75 align-items-center justify-content-evenly'>
      <div className='p-2'>
        <h1 className='text-warning'>Post Generator</h1>
        <p className='text-white mt-2'>Managed by Mveer745</p>
      </div>
      <ul className='text-white d-flex gap-5' style={{fontWeight:"bolder", cursor:"pointer",listStyle:'none'}}>
       <li><NavLink className={({isActive})=> isActive? "text-danger":"text-white"} to={"/"} style={{textDecoration:"none"}}>All Posts</NavLink></li> 
       <li><NavLink className={({isActive})=> isActive? "text-danger":"text-white"} to={"/create-post"} style={{textDecoration:"none"}}>Add Post</NavLink></li>
      </ul>
    </div>
  )
}

export default Header