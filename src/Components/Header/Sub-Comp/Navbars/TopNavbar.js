import React from 'react'

import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';
import Nav from '../nav/Nav';
import TopNotifcation from '../TopNotifcation/TopNotifcation';

export default function TopNavbar() {
    return (
        <div className="Topnav capitalize">
            <TopNotifcation />
            <div className="logoBox container flex justify-between align-center">
                <Logo />
                <Icon />
            </div>
            <div>
                <Nav />
            </div>
        </div>
    )
}
