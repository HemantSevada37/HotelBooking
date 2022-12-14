import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const returnHome = () =>{
    navigate("/");
  }
  

  return (
    <div className="navbar">
      <div className="navContainer">
        <h2 className="logo" onClick={returnHome}>Bookings</h2>
        {userName && <h4>Welcome, <span>{userName}</span></h4>}
        <div className="navItems">
          <button className="navButton" onClick={handleLogin}>Register</button>
          <button className="navButton" onClick={handleRegister}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar