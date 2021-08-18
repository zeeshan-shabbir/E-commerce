import React,{useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
export default function SearchFeild(props) {
    const { SearhClickProp } = props
    console.log(SearhClickProp);
    const [SearhClick, setSearhClick] = useState(SearhClickProp)
    const HandleChange=()=>{
        setSearhClick(SearhClick => !SearhClick)
    }
    const SearchHandleChange=()=>{
        // setSearhClick(SearhClick => !SearhClick)
    }
    return (
        <>
        {SearhClick &&  <div className="seacrhWrapper flex align-center justify-around">
        <AiOutlineSearch onClick={SearchHandleChange}/>
        <form onSubmit="return false">
        <input type="search" name="" id="" placeholder="Seach" className="search center capitalize" />
        </form>
        <div>
        </div>
        <div>
        <ImCross onClick={HandleChange}/>
        </div>
    </div> }
    </>
       
        
    )
}
