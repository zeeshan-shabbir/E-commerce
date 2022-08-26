import React from 'react'
import { NavLink } from "react-router-dom";
export default function Nav() {
    const isActive = {
        fontWeight: "bold",
        color:"white",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
    };
    return (
        
      
               <nav className="navbar">
                        <ul className='flexallcenter'>
                            <li className="nav-item">
                                <NavLink exact to="/" className='nav-Link' activeStyle={isActive}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/Woman" className='nav-Link' activeStyle={isActive}>Woman</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/Men" className='nav-Link' activeStyle={isActive}>men</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/Kid" className='nav-Link' activeStyle={isActive}>kid</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/Handbag" className='nav-Link' activeStyle={isActive}>Handbag</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/jewelery" className='nav-Link' activeStyle={isActive}>jewelery</NavLink>
                            </li>
                        </ul>
                    </nav>

    )
}
