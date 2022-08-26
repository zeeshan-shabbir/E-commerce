import React from 'react'
import slide1 from "../../Assets/Images/slider/slider1.jpg"
import slide2 from "../../Assets/Images/slider/slider2.jpg"
import slide3 from "../../Assets/Images/slider/slider3.jpg"


// Import Swiper React components
import SwiperCore, { Autoplay,  Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
import "./slider.css"
export default function Slider() {
    SwiperCore.use([Autoplay, Navigation, Pagination])

    // slider configuration
    const SliderConfigs = {
        // parallax: true,
        // centeredSlides: true,
        // grabCursor: true,
        speed: 1000,
        spaceBetween: 0,
        effect: 'slide',
        // effect: 'fade',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    };

    return (

        <div>
            <Swiper {...SliderConfigs}>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-pagination"></div>
                <SwiperSlide>
                    <div className='slide slide-2'>
                        <a href="#" className='slide slide-1'>
                            <img src={slide1} alt="" width="100%" height="100%" />
                        </a>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='slide slide-2'>
                            <a href="#" className='slide slide-3'>
                                <img src={slide2} alt="" width="100%" height="100%" />
                            </a>

                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='slide slide-3'>
                            <a href="#" className='slide slide-3'>
                                <img src={slide3} alt="" width="100%" height="100%" />
                            </a>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    )
}

