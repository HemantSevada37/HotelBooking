import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {faWhatsapp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css"

const Navbar = () => {
  // console.log(JSON.parse(localStorage.getItem("hotelUser")));
  const[userName, setUserName] = useState(JSON.parse(localStorage.getItem("hotelUser")));

  const navigate = useNavigate();

  const handleLogin=()=>{
    navigate("/login", {state: false});
  }
  const handleRegister=()=>{
    navigate("/login", {state: true});
  }
  const handleLogout =()=>{
    localStorage.removeItem("hotelUser");
    setUserName(null);
  }
  const returnHome = () =>{
    navigate("/");
  }
  

  return (
    <div className="navbar">
      <div className="navContainer">
        <h2 className="logo" onClick={returnHome}>Bookings</h2>
        {userName && <h4>Welcome, <span>{userName}</span></h4>}
        <div className="navItems">
          {userName ? 
              <button className="navButton" onClick={handleLogout}>Logout</button>
              :
            <>
              <button className="navButton" onClick={handleLogin}>Register</button>
              <button className="navButton" onClick={handleRegister}>Login</button>
            </>}
        </div>
      </div>
        <a className="help">
        {/* <FontAwesomeIcon icon={fa-whatsapp} /> */}
        <FontAwesomeIcon icon="fawhatsapp" />
        <span>Help</span>
        </a>
    </div>
  )
}

export default Navbar