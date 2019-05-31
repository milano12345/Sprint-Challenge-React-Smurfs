import React from 'react';  
import { NavLink } from 'react-router-dom'

function HeaderComponent (){
  return (
    <nav>
        <a>The Smurfs!</a>
        <a><NavLink to="/"> Home </NavLink></a>
        <a><NavLink to="/SmurfForm"> Smurf Form </NavLink></a>
    </nav>

  )
}

export default HeaderComponent;