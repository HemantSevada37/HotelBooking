
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import './errorPage.css'

const ErrorPage = () => {
    const navigate = useNavigate();

    const returnHome = () =>{
        navigate("/");
      }

  return (
    <div className="errorpage">
      <div className="epContainer">
        <h1>Error: 404</h1>
        <h1>Page not found!!!</h1>
        <button className='epButton' onClick={returnHome}>Return Home</button>
      </div>
    </div>
  )
}


export default ErrorPage
