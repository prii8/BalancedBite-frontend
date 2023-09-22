import { useState } from 'react';

import logo11 from "../../../assets/images/logo11.png"

import './sidebar.scss'; // Create a separate CSS file for styling the Sidebar

import { BiChevronRight } from "react-icons/bi"

import { CiLogout } from "react-icons/ci"

import { BsSpeedometer2, BsBookmarks } from "react-icons/bs"

import { PiChartLineUp } from "react-icons/pi"

import { BiUserCircle } from "react-icons/bi"

import { NavLink, useNavigate } from 'react-router-dom';

import { clearStore } from '../../../redux/slices/userSlice';

import { useAppDispatch } from '../../../redux/store';



const Sidebar = () => {

  const navigate = useNavigate();

  const dispatch = useAppDispatch();



  const [isSidebarOpen, setIsSidebarOpen] = useState(false);



  const toggleSidebar = () => {

    setIsSidebarOpen((prevState) => !prevState);

  };





  return (

    <nav className={`sidebar ${isSidebarOpen ? 'open' : 'close'}`}>

      <header>

        <div className="image-text">

          <span className="nav-image">

            <img width={40} src={logo11} alt="logo" />

          </span>

          <div className="text logo-text">

            <span className="name">BalancedBite</span>

            <span className="profession">Your AI Chef</span>

          </div>

        </div>

        <i className={`toggle`} onClick={toggleSidebar}><BiChevronRight />    </i>

      </header>



      <div className="menu-bar">

        <div className="menu">

          <ul className="menu-links">

            <li className="nav-link" onClick={() => { navigate('/app/dashboard') }}>

              <i className="icon"><BsSpeedometer2 /></i>

              <span className="text nav-text">My Dashboard</span>

            </li>

            <li className="nav-link" onClick={() => { navigate('/app/timeline') }}>

              <i className="icon"><PiChartLineUp /></i>

              <span className="text nav-text">My Progress</span>

            </li>

            <li className="nav-link" onClick={() => { navigate('/app/favourite') }}>

              <i className="icon"><BsBookmarks /></i>

              <span className="text nav-text">My Favourites</span>

            </li>

            <li className="nav-link" onClick={() => { navigate('/app/profile') }}>

              <i className="icon"><BiUserCircle /></i>

              <span className="text nav-text">My Profile</span>

            </li>

          </ul>

        </div>



        <NavLink className="bottom-content" style={{ textDecoration: "none" }} onClick={() => { dispatch(clearStore()) }} to={'/'}>

          <li className="nav-link">

            <i style={{ color: "red" }} className="icon"><CiLogout /></i>

            <span style={{ color: "red" }} className="text  nav-text">Logout</span>

          </li>

        </NavLink>

      </div>

    </nav>

  );

};



export default Sidebar;