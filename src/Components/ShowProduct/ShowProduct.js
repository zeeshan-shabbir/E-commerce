import React, { useState } from 'react'
import { Link, useLocation, useHistory, useParams } from "react-router-dom";
import Data from "../../Assets/Data/Data"
import Card from '../Card/Card'
import { FilterSideBar } from './Componet/FilterSideBar';
import './ShowProduct.css'
export default function ShowProduct() {
    const categorys = ['shoes', 'bag', 'robe', 'pajamas', 'sweater', 'pants'];
    const colors = ['white', 'black', 'brown', 'navy', 'blue', 'yellow', 'pink', 'purple', 'beige', 'red', 'green'];

    const [Data1, setData1] = useState(Data);
    let location = useLocation();
    let history = useHistory();
    let searchParams = new URLSearchParams(location.search);
    // console.log("seacrh=",searchParams);
    const addQuery = (key, value) => {
        let pathname = location.pathname;
        // returns path: '/app/books'
        // returns the existing query string: '?type=fiction&author=fahid'
        searchParams.set(key, value);
        history.push({
            pathname: pathname,
            search: searchParams.toString()
        });
    };
    // let KeyWords = ["W Shoes"]
    // searchParams.forEach(function(value) {
    //     KeyWords.push(value)

    // });    // alert("all",all)
    // console.log("keyWord",KeyWords);
    // const Filter = () => {
    //     KeyWords.map((KeyWord) => {
    //         // let x=Data.filter((Product)=>Product.name=="bag")
    //         // setData1(x)
    //         // console.log(KeyWord);
    //         let x = Data.filter((product) =>
    //             product.name == KeyWord
    //             // product.name=="W Shoes" || product.name=="bag"
    //             // let Values=Object.values(product);
    //             // console.log(Values);
    //             // product[key].includes(KeyWord);
    //             // console.log("product",product);
    //             // let key=Object.keys(product);
    //             // console.log(product[key]);
    //             // product[key].includes(KeyWord);
    //             // return Data
    //         )
    //         setData1(x)
    //     })
    //     // console.log(Data);

    // }
    // var keyword = {
    //     catogery: 'shoes',
    //     color: 'pink'
    //   };


    const Filter = () => {
        const keyword = Object.fromEntries(searchParams);
        let FilterData = Data.filter(function (item) {
            for (var key in keyword) {
                if (item[key] === undefined || item[key] != keyword[key])
                    return false;
            }
            return true;
        });
        setData1(FilterData)
    }

    // const Filter = () => {
    //     let catogery = searchParams.get("catogery")
    //     let filterCatogery;
    //     // let catogery ="shoes"
    //     if (catogery==null) {
    //         filterCatogery=false   
    //     }
    //     else{
    //         filterCatogery=true
    //     }
    //     alert(catogery)
    //     // let color = searchParams.get("color")
    //     let color = "pink"
    //     let FilterData = Data.filter((Product) =>filterCatogery && Product.catogery == catogery && Product.color == color)
    //     setData1(FilterData)

    // }


    // console.log("new data",Data);
    const userFilter = () => {
        addQuery("color", "pink")
        Filter()
        //   let catogery= searchParams.get("catogery")
        //   alert(catogery)
        //   let x=Data.filter((Product)=>Product.name=="W Shoes")
        //   console.log(x);
        //   setData1(x)

        // console.log("working");
    }
    const userFilter1 = () => {
        addQuery("catogery", "shoes")
        Filter()
        //   let catogery= searchParams.get("catogery")
        //   alert(catogery)
        //   let x=Data.filter((Product)=>Product.name=="W Shoes")
        //   console.log(x);
        //   setData1(x)

        // console.log("working");
    }
    const Remove = (params) => {
        searchParams.delete("color")
        history.replace({
            search: searchParams.toString(),
        })
        Filter()

    }


    return (
        <>
            {/* <h1 >products showing here ...</h1>
            <button onClick={userFilter}>color</button>
            <button onClick={userFilter1}>catogery</button>
            <button onClick={Remove}>remove</button>

            <div className="flex flexwrap align-center justify-between showcard">
                {Data1.map((product) => (
                    <Card key={product.id} product={product}></Card>
                ))}
            </div>
            <div>

            </div> */}
            <div className="mainContainer flex justify-between capitalize">
               <FilterSideBar />
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
