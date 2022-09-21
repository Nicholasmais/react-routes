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
    const index =  routes.map(obj => obj.route).indexOf(rota.slice(0,9) === "/product/" ? "/" : rota);
    return index;
  };

  useEffect(()=>{
    setCurrent(routes[findIndexName(location.pathname)].name)
  },[location])

  return (  
    <div>
        <div className={s.Navbar}>
          {routes.map((val, i) => (
            <div className={s.listItem}
                 style={{listStyleType : `${current === val.name ? "circle" : "none"}`,
                        borderBottom:`${current === val.name ? "1px solid #000" : ""}`,
                        paddingBottom:`${current === val.name ? "1px" : ""}`}}
                key={i}>
              <Link to={val.route}>{val.name}</Link>
            </div>
          ))}
        </div>
    </div>    
  )
}

export default Navbar