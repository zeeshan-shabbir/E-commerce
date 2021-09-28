import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./Card.css"
// import "../ProductDetail/ProductDetail.js"
export default function Card(props) {
    const addToCart = (params) => {
        alert("working")
    }
    
    const { product } = props;
    let category=product.category
    let productName=product.title
    let id=product.id
    return (

        <Link exact className="ProductLink" 
        to={
            `/Product/${id}/${category}/${productName}`
        }
        // to={{
        //     // pathname: "/Product_veiw",
        //     pathname:`../ProductDetail/ProductDetail/${catogery}`,
        //     state: {
        //     //   fromNotifications: true,
        //     id:product.id,
        //     catogery:product.catogery,
        //     newPrice:product.newPrice,
        //     image:product.image,

        //     },
        //   }}
        >
            <div className="Product capitalize">
                <div className={product.badge !== "none"?"badge":"hide"}>{product.badge}</div>
                <div className="Product-img-box">
                    <img src={product.image} alt="" className="p-img" />
                </div>
                <div className="product-body center">
                    <div className="p-title">{product.category}</div>
                    <div className="p-para">{product.title}</div>
                    <div className="flexallcenter p-price">
                    <div className={product.oldPrice !== "none"?"p_oldPrice":"hide"}><span>pkr {product.oldPrice}</span></div>
                    <div className="p_newPrice"><span>pkr {product.newPrice}</span></div>
                    </div>
                    <div className="flex align-center justify-around">
                    <button className="addToCart btn" onClick={addToCart}>Add to cart</button>
                    <button className="addToCart btn">wishlist</button>

                    </div>
                </div>
            </div>
        </Link>
    )
}