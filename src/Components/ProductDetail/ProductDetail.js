import React from 'react'
import { useParams } from 'react-router';
import Data from "../../Assets/Data/Data"

export default function ProductDetail(props) {
    // // const { product } = props;
    // const location = useLocation()
    // const { catogery , image ,newPrice,id } = location.state
    // console.log(catogery);
    // console.log(id);
    // console.log(img);
    // console.log(price);
    // console.log(product,"product");
    let { id } = useParams()
    console.log(Data, "Data detail");
    let showItem = Data.filter((item) => item.id == id)
    console.log(showItem, "showitem");
    return (
        <div>
            {
                showItem.map((item) => {
                    return (
                        <div className="detProWrapper flex justify-center capitalize ">
                            <div className="detProImage">
                                <div className="detProImageBox">
                                    <img src={item.image} alt="" height="100%" width="100%" />
                                </div>
                            </div>
                            <div className="detProContent">
                                <div className="body center">
                                    <div className="p-title">{item.title}</div>
                                    <div className="p-para">{item.category}</div>
                                    <div className="flexallcenter p-price">
                                        {/* <div className={oldPrice !== "none"?"p_oldPrice":"hide"}><span>pkr {oldPrice}</span></div> */}
                                        <div className="p_newPrice"><span>pkr {item.newPrice}</span></div>
                                    </div>
                                    <div className="flex align-center justify-around">
                                        <button className="addToCart btn">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        // <div className="ProductLink capitalize">
                        //     {/* <div className={badge !== "none"?"badge":"hide"}>{badge}</div> */}
                        //     <div className="img-box">
                        //         <img src={item.image} alt="" className="p-img" />
                        //     </div>
                        //     <div className="body center">
                        //         <div className="p-title">{item.catogery}</div>
                        //         {/* <div className="p-para">{discription}</div> */}
                        //         <div className="flexallcenter p-price">
                        //             {/* <div className={oldPrice !== "none"?"p_oldPrice":"hide"}><span>pkr {oldPrice}</span></div> */}
                        //             <div className="p_newPrice"><span>pkr {item.newPrice}</span></div>
                        //         </div>
                        //         <div className="flex align-center justify-around">
                        //             <button className="addToCart btn">Add to cart</button>
                        //         </div>
                        //     </div>
                        // </div>
                    )

                })
            }


        </div>
    )
}
