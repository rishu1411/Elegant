import React from 'react'
import Link from 'next/link';
import Button from './Button'

export default function Product({ product }) {
  const { id, image, title, category, price } = product

 
  
  return (
    <>
     
    <div className='flex flex-col'>
      <div className='border rounded-sm hover:shadow-lg h-[300px] mb-4 relative overflow-hidden group transition bg-white'>
        <div className='flex items-center justify-center w-full h-full'>
          <div className='w-[200px] mx-auto flex items-center justify-center '>
            <img className=' group-hover:scale-110 max-h-[160px] transition duration-300' src={image} alt='' width={120} height={120}/>
          </div>
          <Button id={ id} product={product} />

        </div>
        
      </div>
      <div className='px-2'>
      <div className='text-sm capitalize text-gray-500 mb-1 '>{category}</div>
      <Link href='/'>
        <h3 className='font-semibold'>{ title}</h3>
      </Link>
      <div className='font-semibold'>{ price}$</div>
        <div>
        </div>

      </div>
      </div>
      </>
  )
}
 