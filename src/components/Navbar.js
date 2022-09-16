import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from "../styles/Navbar.module.scss";

const Navbar = () => {
  const location = useLocation();
  const [home, setHome] = useState(true);
  useEffect(() => {
    setHome(location.pathname === "/" ? true : false);
  },[location])
  return (
    <div>
        <ul className={s.Navbar}>
            <li style={{listStyleType: `${home ? "circle":"none"}`}}><Link to="/">Home</Link> </li>
            <li style={{listStyleType: `${!home ? "circle":"none"}`}}><Link to="/about"> About</Link> </li>
        </ul>
    </div>    
  )
}

export default Navbar