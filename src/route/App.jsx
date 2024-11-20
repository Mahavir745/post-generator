import React, { useState } from 'react'
import Header from '../component/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Footer from '../component/Footer'
import Sidebar from '../component/Sidebar'
import PostListProvider from '../store/PostListStore'
import { Outlet } from 'react-router-dom'

const App = () => {

  const [selectedTab, setSelectedTab] = useState("Home")

  return (
    <PostListProvider>
    <div className='social_container'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
      <div className="social_child">
      <Header></Header>
      <Outlet />
      <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  )
}

export default App