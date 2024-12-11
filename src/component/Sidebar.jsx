import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight, FaHouseUser,FaTelegramPlane} from "react-icons/fa";


const Sidebar = ({selectedTab,setSelectedTab,HandleSlideWindow,slideWindow}) => {

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar "
      style={{ width: 220 }}
    >
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width={40} height={32}>
          <use xlinkHref="#bootstrap" />
      </svg>
      <span className="fs-4" onClick={HandleSlideWindow}>Explore  {slideWindow ? <FaArrowRight/>: <FaArrowLeft/>}</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={()=> setSelectedTab("Home")}>
          <Link to="/" className={`nav-link text-white ${selectedTab === "Home" && 'active'}`} aria-current="page">
            <svg className="bi pe-none me-2" width={16} height={16}>
            </svg>
            Home <FaHouseUser />
          </Link>
        </li>
        <li onClick={()=> setSelectedTab("Create Post")}>
          <Link to="/create-post" className={`nav-link text-white ${selectedTab === "Create Post" && 'active'}`}>
            <svg className="bi pe-none me-2" width={16} height={16}>
            </svg>
            Create Post <FaTelegramPlane/>
          </Link>
        </li>
      </ul>
      <hr />
    </div>

  )
}

export default Sidebar