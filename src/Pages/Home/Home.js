import React from 'react'
import Card from '../../Components/Card/Card'
import Slider from '../../Components/slider/Slider'
import Data from "../../Assets/Data/Data"
import FeatureProduct from '../../Components/Feature Product/FeatureProduct';

export default function Home() {
  console.log(Data);
    return (
        <div>
          <Slider />
          {/* <Card /> */}
          {/* {Data.map((product) => (
                        <Card key={product.id} product={product}></Card>
                    ))} */}
          <FeatureProduct />
          <FeatureProduct />
        </div>
    )
}
