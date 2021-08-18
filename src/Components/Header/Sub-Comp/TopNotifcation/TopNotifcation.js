import React from 'react'
import { AiFillPhone } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import Icon from '../Icon/Icon';
export default function TopNotifcation() {
    return (
        <div className="topNotif flex align-center">
            <div className="telephone flexallcenter">
                <div>

                    <AiFillPhone />


                </div>
                <div>
                    +920123456789
                </div>
            </div>
            <div className="marque">   
                    {/* <marquee scrollamount="5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</marquee> */}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, eius.
            </div>
            <div className="wishDiv flex justify-between">
                <div className="flexallcenter">
                <AiFillHeart />
                    <span>
                        wishlist
                    </span>
                </div>
              
            </div>
        </div>
    )
}
