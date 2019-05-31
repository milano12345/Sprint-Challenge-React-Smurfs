import React, { Component } from 'react';  
import { Link } from 'react-router-dom'

function HeaderComponent (){
  return (
      
    <ul>
        <li><h1>The Smurfs</h1></li>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li>
        <Link to="/SmurfForm"> Smurf Form </Link>
      </li>
    </ul>
  )
}

export default HeaderComponent;