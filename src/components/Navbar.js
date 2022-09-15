import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from "./Navbar.module.scss";

const Navbar = () => {
  const pathname = window.location.pathname;
  const [home, setHome] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setHome(pathname === "/" ? true : false);
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