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
                <div className="footerContent">
                    <h1>footer content</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, ad. Vero cumque et mollitia ratione perferendis porro omnis, error repudiandae velit suscipit nesciunt ex sint neque fuga aliquid vel. Rerum.
                    </p>
                </div>
                <div className="aboutWrapper">
                    <h1>About us</h1>
                    <ul className="flex">
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
                <div className="customerWrapper">
                    <h1>customer care</h1>
                    <ul className="flex">
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
                <div className="FlogoWrapper">
                    <div className="fLogo">
                       <h1> the best shop</h1>
                    </div>
                    <div className="socailLogos">
                        <a href="" className="socail">
                            <SiGmail />
                        </a>
                        <a href="" className="socail">
                            <FaFacebookF />
                        </a>
                        <a href="" className="socail">
                            <FaLinkedinIn />
                        </a>
                        <a href="" className="socail">
                            <FiFacebook />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hr"></div>
            <div className="socailWrapper">

            </div>
        </div>
    )
}
