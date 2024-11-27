import React from 'react'
import {NavLink} from "react-router-dom"

const Nav = () => {
  return (
    <div>
        <div class="main">
        <div class="option">
            <div class="option1">

            <div class="nev-logo">
                <div class="logo">
                    <img src="images/logo.png" alt="" />
                </div>
            </div>

            <div class="nev-tag">
              
              <NavLink to="home" id="submenu">HOME</NavLink>
              <NavLink to="ABOUT" id="submenu">ABOUT</NavLink>
              <NavLink to="SERVICES" id="submenu">SERVICES</NavLink>
              <NavLink to="PORTFOLIO" id="submenu">PORTFOLIO</NavLink>
              <NavLink to="TEAM" id="submenu">TEAM</NavLink>
              <NavLink to="CONTACT" id="submenu">CONTACT</NavLink>
             
            </div>
         </div>
        </div>
    </div>

    </div>
  )
}

export default Nav
