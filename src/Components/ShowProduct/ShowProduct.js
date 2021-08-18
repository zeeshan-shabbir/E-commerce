import React, { useState } from 'react'
import { Link,useLocation,useHistory,useParams  } from "react-router-dom";
import Data from "../../Assets/Data/Data"
import Card from '../Card/Card'
import './ShowProduct.css'
export default function ShowProduct() {
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
    let KeyWords=["W Shoes"]
    // searchParams.forEach(function(value) {
    //     KeyWords.push(value)
        
    // });    // alert("all",all)
    // console.log("keyWord",KeyWords);
    const Filter=()=>{
        KeyWords.map((KeyWord)=>{
            // let x=Data.filter((Product)=>Product.name=="bag")
            // setData1(x)
            // console.log(KeyWord);
            let x=Data.filter((product)=>
                product.name==KeyWord
                // product.name=="W Shoes" || product.name=="bag"
                // let Values=Object.values(product);
                // console.log(Values);
                // product[key].includes(KeyWord);
                // console.log("product",product);
                // let key=Object.keys(product);
                // console.log(product[key]);
                // product[key].includes(KeyWord);
                // return Data
            )
            setData1(x)
        })
        // console.log(Data);

    }
   
    // console.log("new data",Data);
    const FilterByColor = () => {
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
        searchParams.delete("catogery")
        history.replace({
            search: searchParams.toString(),
          })
          setData1(Data)
    
    }
    

    return (
        <>
            <h1 >products showing here ...</h1>
            <button onClick={FilterByColor}>Filter</button>
            <button onClick={() => addQuery("name","bag")}>bag</button>
            <button onClick={Remove}>remove</button>
            {/* <Link
                to={{
                    // pathname: "/courses",
                    search: Filter,
                }}
                onClick={handleChange}
                >
                Color
            </Link> */}
            {/* <Link
                to={{
                    // pathname: "/courses",
                    search: "?sort=size",
                }}>
                size
            </Link> */}
            {/* <button  onClick={handleChange} >
                    color
                    </button> */}
            <div className="flex flexwrap align-center justify-between showcard">
                {Data1.map((product) => (
                    <Card key={product.id} product={product}></Card>
                ))}
            </div>
            <div>

            </div>
        </>
    )
}
