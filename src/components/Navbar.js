import React from 'react'
import { Link } from 'react-router-dom';
import s from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div>
        <ul className={s.Navbar}>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/about"> About</Link> </li>
        </ul>
    </div>    
  )
}

export default Navbar