import {React,useState} from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import SearchFeild from '../SearchFeild';
export default function Icon() {
    const [SearhClick, setSearhClick] = useState(false)
    console.log("before click",SearhClick);
    const HandleChange=()=>{
        setSearhClick(SearhClick => !SearhClick)
        console.log("after click",SearhClick);
    }
   
    return (
        <div className="flexallcenter">
        <div className="searchIcon">
            <span className="icon">
                <AiOutlineSearch onClick={HandleChange}/>
                {SearhClick &&  <SearchFeild SearhClickProp={SearhClick}/> }
              
            </span>
        </div>
        <div className="user">
        <span className="icon">
                <AiOutlineUser />
            </span>
        </div>
        <div className="Cart">
        <span className="icon">
                <AiOutlineShoppingCart />
            </span>
        </div>
    </div>
    )
}
