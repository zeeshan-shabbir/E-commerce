import React, { useState, useEffect,useContext } from 'react'
import { GlobalContext } from '../../context/context'
import { Link, useLocation, useHistory, useParams } from "react-router-dom";
import Data from "../../Assets/Data/Data"
import Card from '../Card/Card'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FilterSideBar } from './SubComponet/FilterSideBar';
import './ShowProduct.css'
export default function ShowProduct() {
    // const { state, dispatch } = useContext(GlobalContext);
    // console.log(state,"data");
    
    const { category: category } = useParams();
    console.log(category);
    const FilterAvailable = [
        {
            catogery: 'color',
            options: ['white', 'black', 'brown', 'navy', 'blue', 'yellow', 'pink', 'purple', 'beige', 'red', 'green'],
        },
        {
            catogery: 'size',
            options: ['extra small', 'small', 'medium', 'large', 'extra large', 'xxl'],
        },
    ]
    // const [Data1, setData1] = useState(Data);
    let FilterDataCat = Data.filter((item) => item.category == category.toLowerCase())
    useEffect(() => {
        setData1(FilterDataCat)
    }, [category]);
    const [Data1, setData1] = useState(FilterDataCat);
console.log("renderning");
    let location = useLocation();
    let history = useHistory();
    let searchParams = new URLSearchParams(location.search);
    const addQuery = (key, value) => {
        let pathname = location.pathname;
        searchParams.set(key, value);
        history.push({
            pathname: pathname,
            search: searchParams.toString()
        });
    };
    const Filter = () => {
        const keywordObject = Object.fromEntries(searchParams);
        let keywordArray=Object.keys(keywordObject);
        console.log("array is",keywordArray);
        if (keywordArray.length === 0) {
            setData1(FilterDataCat)
        }else{
            let filterData=[]
            keywordArray.map((keyword)=>{
                switch (keyword) {
                                case "color":
                                    console.log("in color");              
                                    console.log("keyword",keywordObject.color);  
                                    let FilterByColor=FilterDataCat.filter((item)=>{
                                        let y = item.color.includes(keywordObject.color)
                                        console.log(y, "item[key]");
                                        return y

                                    })      
                                    filterData=[...FilterByColor]     
                                    break   
                                case "catogery":
                                    console.log("In catogery");
                                    console.log(keywordObject.catogery, "keyword[key]");
                                    let FilterByCatogeray=FilterDataCat.filter((item)=>{
                                        if (item.catogery === undefined || item.catogery  != keywordObject.catogery){
                                            return false;
                                        }else{
                                            return true
                                        }

                                    })
                                    filterData=[...FilterByCatogeray]    
                                    break 
                                default:
                                    console.log("In defualt");
                                    return true
                            }
                            
                        })
                        console.log(filterData);
                        setData1(filterData)
        }
      
    }
      

    const Remove = () => {
        searchParams.delete("color")
        history.replace({
            search: searchParams.toString(),
        })
        Filter()

    }

    const [filterClickOption, setfilterClickOption] = useState([])
    const addRemoveQuery = (key, value) => {
      
        let obj = {
            key,
            value,
        }
        filterClickOption.push(obj)
        setfilterClickOption(filterClickOption)
    }

    const handelClick = (key, value) => {
        addQuery(key, value)
        Filter()
        addRemoveQuery(key, value)

    }

    const FilterItem = ({ item, id }) => {
        const [open, setOpen] = useState(false);

        return (
            <li className="filterItem" key={id}>
                <div
                    className="filterBtn flex align-center justify-between"
                    onClick={() => setOpen(!open)}
                >
                    <h2>{item.catogery}</h2>
                    <div>
                        {open ? (
                            <IoIosArrowDown className="downArrow" />
                        ) : (
                            <IoIosArrowUp className="downArrow" />
                        )}
                    </div>
                </div>

                {item.options.map((option) => {
                    let cat = item.catogery;
                    return (
                        <>
                            {open && (
                                <ul className="filterOption" >
                                    <li className="filterOptionitem">
                                        <button onClick={() => { handelClick(cat, option) }}>{option}</button>
                                    </li>
                                </ul>
                            )}
                        </>
                    );
                })}
            </li>
        );
    };

    const removeQuery = (key) => {
        searchParams.delete(key)
        let arr = filterClickOption.filter(item => item.key !== key)
        setfilterClickOption(arr)
        history.replace({
            search: searchParams.toString(),
        })
        Filter()

    }



    return (
        <>
            <div className="mainContainer flex justify-between capitalize">
                <div className="filterSideBar">
                    <div className="filterHeading">
                        <h1>Filter</h1>
                    </div>

                   {filterClickOption.length!==0 && <div className="filterClick">
                        <h1>Shopping By</h1>
                        <div>
                            { filterClickOption.map((item) => {
                                return <>
                                    <ul className="filterClickList">
                                        <li>
                                            <button className="clearOne" onClick={() => { removeQuery(item.key) }}>x</button> <strong>{item.key}</strong> : <span>{item.value}</span>
                                        </li>
                                    </ul>
                                </>
                            })
                            }
                            <div className="center">
                                <span className="clearAll">clear all</span>
                            </div>
                        </div>
                    </div>}


                    <div className="filterContent">
                        <ul className="filterList">
                            {FilterAvailable.map((item, id) => {
                                return <FilterItem item={item} key={id}/>;
                            })}


                        </ul>
                    </div>
                </div>
                <div className="mainContent">
                    <div className="flex flexwrap align-center justify-evenly showcard">
                        {Data1.map((product) => (
                            <Card key={product.id} product={product}></Card>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}
