import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from "../styles/Navbar.module.scss";

const Navbar = () => {
  const location = useLocation();
  const [current, setCurrent] = useState("Home");

  const routes = [{route:"/", name:"Home"},
                  {route:"/about", name:"About"},
                  {route:"/news", name:"News"}]

  const findIndexName = (rota) => {
    const index =  routes.map(obj => obj.route).indexOf(rota);
    return index;
  };

  useEffect(()=>{
    setCurrent(routes[findIndexName(location.pathname)].name)
  },[location])

  return (  
    <div>
        <ul className={s.Navbar}>
          {routes.map((val, i) => (
            <li style={{listStyleType : `${current === val.name ? "circle" : "none"}`}} key={i}>
              <Link to={val.route}>{val.name}</Link>
            </li>
          ))}
        </ul>
    </div>    
  )
}

export default Navbar