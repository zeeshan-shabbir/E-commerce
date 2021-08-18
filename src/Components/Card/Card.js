import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./Card.css"

export default function Card(props) {
    const { product } = props;
    return (

        <Link className="ProductLink" exact
            to="/"
        // to={{
        //     pathname: "/Product_veiw",
        //     state: {
        //     //   fromNotifications: true,
        //     id:product.id,
        //     name:product.name,
        //     price:product.price,
        //     img:product.image,

        //     },
        //   }}
        >
            <div className="Product capitalize">
                <div className={product.badge !== "none"?"badge":"hide"}>{product.badge}</div>
                <div className="Product-img-box">
                    <img src={product.image} alt="" className="p-img" />
                </div>
                <div className="product-body center">
                    <div className="p-title">{product.name}</div>
                    <div className="p-para">{product.discription}</div>
                    <div className="flexallcenter p-price">
                    <div className={product.oldPrice !== "none"?"p_oldPrice":"hide"}><span>pkr {product.oldPrice}</span></div>
                    <div className="p_newPrice"><span>pkr {product.newPrice}</span></div>
                    </div>
                    <div className="flex align-center justify-around">
                    <button className="addToCart btn">Add to cart</button>
                    <button className="addToCart btn">wishlist</button>

                    </div>
                </div>
            </div>
        </Link>
    )
}