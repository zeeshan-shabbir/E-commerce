import React from 'react'
import { NavLink } from "react-router-dom";
export default function Nav() {
    const isActive = {
        fontWeight: "bold",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    };
    return (
        
        <div>
               <nav className="navbar">
                        <ul className='flexallcenter'>
                            <li className="nav-item">
                                <NavLink exact to="/" className='nav-Link' activeStyle={isActive}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/Woman" className='nav-Link' activeStyle={isActive}>Woman</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/Man" className='nav-Link' activeStyle={isActive}>man</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/Kid" className='nav-Link' activeStyle={isActive}>kid</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/Handbag" className='nav-Link' activeStyle={isActive}>Handbag</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/About" className='nav-Link' activeStyle={isActive}>About us</NavLink>
                            </li>
                        </ul>
                    </nav>
        </div>
    )
}
