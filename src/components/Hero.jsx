import React from 'react'
import Link from 'next/link'
import ImageSlider from './ImageSlider'
export default function Hero() {
  
  return (
    <div className='bg-hero h-screen bg-center bg-cover '>
      <div className='container mx-auto flex xs:flex-row flex-col justify-evenly items-center h-full  '>

        <div className='uppercase space-y-2  md:pr-36 mt-28 xs:mt-0'>
          <div className='flex gap-x-2 items-center'>
            <div className='h-[2px] w-6 bg-red-600 '></div>
            <span className='font-medium text-sm' >New trend</span>
          </div>
            <h3 className='text-2xl xm:text-4xl font-medium'>AUtumn sale stylish</h3>
          <h3 className='font-black text-2xl sm:text-4xl'>Men & womens</h3>
          <Link href='' className='underline underline-offset-4 font-medium'>Discover More</Link>
        </div>
      <div className='lg:flex items-center justify-center hidden '>
    <ImageSlider/>
        </div>
        
        </div>
    </div>
  )
}
