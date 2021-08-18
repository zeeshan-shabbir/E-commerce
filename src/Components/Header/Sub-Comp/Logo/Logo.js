import React from 'react'
import { NavLink } from "react-router-dom";
export default function Logo() {
    return (
     
              <div className='Logo'>
                            <NavLink exact to="/" className='nav-Link'><p className="Logo-text">My Logo</p></NavLink>
                        </div>
        
    )
}
