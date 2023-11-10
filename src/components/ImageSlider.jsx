'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import fashion1 from '../assets/fashion1.png'
import fashion2 from '../assets/fashion2.png'
import fashion3 from '../assets/fashion3.png'
import fashion4 from '../assets/fashion4.png'
import fashion5 from '../assets/fashion5.png'
import fashion6 from '../assets/fashion6.png'
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';


// import '../app/slider.css';


import { Autoplay } from 'swiper/modules'

const image = [{url:fashion1},{url:fashion2},{url:fashion3},{url:fashion4},{url:fashion5},{url:fashion6},]


function ImageSlider() {
    return (
      <>
      <Swiper 
                slidesPerView={1}
                modules={[ Autoplay]}
                centeredSlides={true}
          autoplay={{
              delay: 5000,
              disableOnInteraction: false,
                }}
                pagination={{
                    clickable:true
                }}
          className='sm:w-[200px] lg:max-w-[300px]  lg:mt-10 max-w-[250px] '
      >
          {
              image.map((item,key) => {
                  return (
                      <SwiperSlide key={key} className=''>
                          <div >
                              
                              <Image src={item.url} alt="fashion" className='w-64 lg:h-96 md:h-72 mt-10'     />
                          </div>
                          
                      </SwiperSlide>
                  )
              })
            }
            </Swiper>
            </>
  )
}

export default ImageSlider   