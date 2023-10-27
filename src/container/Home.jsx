// 'use client'
import { ProductContext } from '@/Context/ProductContext'
import Product from '@/components/Product'
import RotateRightIcon from '@mui/icons-material/RotateRight';

import React, { useContext } from 'react'

function Home() {
  const { products,isLoading } = useContext(ProductContext)

  const filteredProduct = products.filter((item) => {
    return (
      item.category == "men's clothing" || item.category == "women's clothing"
    )
  })

  return (
    <>
      {isLoading ?
      (<div className='flex items-center justify-center h-[50vh]'><RotateRightIcon className='animate-spin text-pink-400' /></div>)  :
      (<section className='py-16'>
        <div className="container mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:grid-cols-5 mx-auto max-w-sm md:max-w-none md:mx-0'>
          {
            filteredProduct.map((product, key) => {
              return (
                <Product key={product.id} product={ product} />
                
                )
              })
            }
            </div>
        </div>
      </section>)
            }
    </>
  )
}

export default Home