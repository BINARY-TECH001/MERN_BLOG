import "./topBar.css"
import React, { useState } from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { ImSearch } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import User from "../../assets/user.png"


const TopBar = () => {

  const [ showNavbar, setShowNavbar ] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <div className="topBar">
      <div className="topLeft">
        { !showNavbar &&
           <GiHamburgerMenu className="hamburger icon" onClick={handleShowNavbar} />
        }
        <BsFacebook className="icon topIcon" />
        <AiFillTwitterCircle className="icon topIcon" />
        <BsPinterest className="icon topIcon" />
        <GrInstagram className="icon topIcon" />
      </div>

      <div className={`topCenter ${showNavbar && 'active'}`} >
        <div className="darkMode">
          { showNavbar ?
          <CgClose className="closeIcon icon" onClick={handleShowNavbar} />
           :
           <GiHamburgerMenu className="hamburger icon" onClick={handleShowNavbar} />
        }
          <button className="becomeAuthhor"> Beccome an Author </button>
        </div>
        <ul className="topList">
          <li className="topListItem"> Home </li>
          <li className="topListItem"> About </li>
          <li className="topListItem"> Contact </li>
          <li className="topListItem"> Write </li>
          <li className="topListItem"> Logout </li>
        </ul>
      </div>

      <div className="topRight">
        <ImSearch className="topSearchIcon icon" />
        <img src={User} alt="profile" className="topImg" />
      </div>
    </div>
  )
}

export default TopBar