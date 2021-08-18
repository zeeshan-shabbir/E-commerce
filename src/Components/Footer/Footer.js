import React from 'react'
import './Footer.css'


import { FaFacebookF } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FiFacebook } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
export default function Footer() {
    return (
        <div className="footerWrapper">
            <div className="footer flex align-items justify-between capitalize">
                <div className="aboutWrapper">                
                        <h1>About us</h1>
                    <ul className="flexallcenter">
                        <li className="aboutItem">
                            <a href="#" className="aboutLink">About us</a>
                        </li>
                        <li className="aboutItem">
                            <a href="#" className="aboutLink">Company</a>
                        </li>
                        <li className="aboutItem">
                            <a href="#" className="aboutLink">About us</a>
                        </li>
                        <li className="aboutItem">
                            <a href="#" className="aboutLink">About us</a>
                        </li>
                    </ul>
                </div>
                <div className="footerContent">
                    <h1>footer content</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, ad. Vero cumque et mollitia ratione perferendis porro omnis, error repudiandae velit suscipit nesciunt ex sint neque fuga aliquid vel. Rerum.
                    </p>
                </div>
                <div className="customerWrapper">
                <h1>customer care</h1>
                    <ul className="flexallcenter">
                        <li className="customerItem">
                            <a href="#" className="customerLink">contact us</a>
                        </li>
                        <li className="customerItem">
                            <a href="#" className="customerLink">complaint</a>
                        </li>
                        <li className="customerItem">
                            <a href="#" className="customerLink">feedback</a>
                        </li>
                        <li className="customerItem">
                            <a href="#" className="customerLink">privacy policy</a>
                        </li>
                        <li className="customerItem">
                            <a href="#" className="customerLink">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hr"></div>
            <div className="socailWrapper">

            </div>
        </div>
    )
}
