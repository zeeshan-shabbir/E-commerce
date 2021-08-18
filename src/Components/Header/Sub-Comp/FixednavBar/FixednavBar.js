import React from 'react'
import Icon from '../Icon/Icon'
import Logo from '../Logo/Logo'
import Nav from '../nav/Nav'
import "./FixednavBar.css"

export default function FixednavBar() {
    return (
        <div className="FixednavBar">
             <div className="logoBox container flex justify-between align-center">
                <Logo />
                <Nav />
                <Icon />
            </div>
        </div>
    )
}
