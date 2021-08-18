import React, { useRef } from 'react';
import slide2 from "../../Assets/Images/slider/slider2.jpg"
import Data from '../../Assets/Data/Data'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.min.css";
import "./FeatureProduct.css"
import Card from '../Card/Card';
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
export default function FeatureProduct() {
    SwiperCore.use([Navigation, Pagination])
    const SliderConfigs = {
        speed: 1500,
        spaceBetween: 25,
        effect: 'slide',
        slidesPerView: 5,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            // disableOnInteraction:false,
            pauseOnMouseEnter: true,
        },
    };
    const swiperRef = useRef(null);
    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <div className="FProducts">
            <div className="fpWrapper flex align-center justify-between">
            <div className="FP-h1">
                <h1>Feature Products</h1>
            </div>
            <div className="swiperBtns">
                <button onClick={goPrev} className="swiperBtn">
                    <GrPrevious />
                </button>
                <button onClick={goNext} className="swiperBtn">
                    <GrNext />
                </button>
            </div>
           
            </div>
            
            <Swiper {...SliderConfigs} ref={swiperRef}>
                {Data.map((product) => (
                    <SwiperSlide className="swiperSlide">
                        <Card key={product.id} product={product}>

                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
