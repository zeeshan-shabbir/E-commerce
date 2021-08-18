import React, { useState, useEffect } from 'react'



import "./Header.css"
import FixednavBar from './Sub-Comp/FixednavBar/FixednavBar'
import TopNavbar from './Sub-Comp/Navbars/TopNavbar'

export default function Header() {
    
    const [Heigth, setHeigth] = useState(true)
    console.log(window.scrollY);
    
    const listenScrollEvent = (event) => {
        if (window.scrollY < 200) {
            return setHeigth(true)
        } else if (window.scrollY > 400) {
            return setHeigth(false)
        }
    }   
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    return (
        <div>
                {Heigth ? <TopNavbar /> : <FixednavBar />}
            {/* <TopNavbar /> */}
            {/* <FixednavBar /> */}
        </div>


    )
}
