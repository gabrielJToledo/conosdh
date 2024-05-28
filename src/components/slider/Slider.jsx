import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import banner from '../../assets/slider/banner1.jpg'
import './Slider.css'

function Slider() {

    useEffect(() => {
        let sliderSwiper = document.getElementById('mySwiper')
        const currentWidth = window.innerWidth
        sliderSwiper.style.width = (currentWidth - 21) + 'px'

        window.addEventListener('resize', () => {
            let sliderSwiper = document.getElementById('mySwiper')
            const currentWidth = window.innerWidth
            sliderSwiper.style.width = (currentWidth - 21) + 'px'
        })
    })

    return (
        <section className='c-slider__container'>
            <Swiper id='mySwiper'
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide><img className='img' src={banner} alt="" /></SwiperSlide>
                <SwiperSlide><img className='img' src={banner} alt="" /></SwiperSlide>
                <SwiperSlide><img className='img' src={banner} alt="" /></SwiperSlide>
                <SwiperSlide><img className='img' src={banner} alt="" /></SwiperSlide>
                <SwiperSlide><img className='img' src={banner} alt="" /></SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Slider