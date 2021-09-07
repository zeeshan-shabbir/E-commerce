import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";

export const FilterSideBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="filterSideBar">
            <div className="filterHeading">
                <h1>Filter</h1>
            </div>
            <div className="filterContent">
                <ul className="filterList">
                    <li className="filterItem">
                        <div className="filterBtn flex align-center justify-between" onClick={() => {
                            setOpen(!open);
                        }}>
                            <h2>
                                type
                            </h2>
                            <div>
                                {open ? <IoIosArrowDown className="downArrow" /> : <IoIosArrowUp className="downArrow" />}
                            </div>
                        </div>
                        {open && <ul className="filterOption">
                            <li className="filterOptionitem">
                                <button>1pc</button>
                            </li>
                            <li className="filterOptionitem">
                                <button>2pc</button>
                            </li>
                            <li className="filterOptionitem">
                                <button>3pc</button>
                            </li>
                            <li className="filterOptionitem">
                                <button>4pc</button>
                            </li>
                            <div className="hrLine"></div>
                        </ul>}

                    </li>

                    <li className="filterItem">
                        <div className="filterBtn flex align-center justify-between">
                            <h2>
                                Color
                            </h2>
                            <div>
                                <IoIosArrowDown className="downArrow" />
                            </div>
                        </div>
                        <ul className="filterOption">
                            <li className="filterOptionitem">
                                <button>red</button>
                            </li>
                            <li className="filterOptionitem">
                                <button>yellow</button>
                            </li>
                            <li className="filterOptionitem">
                                <button>green</button>
                            </li>
                            <li className="filterOptionitem">
                                <button>blue</button>
                            </li>
                            <div className="hrLine"></div>
                        </ul>
                    </li>

                    <li className="filterItem">
                        <div className="filterBtn flex align-center justify-between">
                            <h2>
                                Color
                            </h2>
                            <div>
                                <IoIosArrowDown className="downArrow" />
                            </div>
                        </div>
                        <ul className="filterOption">
                            <li className="filterOptionitem">
                                <button>red</button>
                            </li>
                            <li className="filterOptionitem">
                                <button>yellow</button>
                            </li>
                            <li className="filterOptionitem">
                                <button>green</button>
                            </li>
                            <li className="filterOptionitem">
                                <button>blue</button>
                            </li>
                            <div className="hrLine"></div>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>

    )
}
