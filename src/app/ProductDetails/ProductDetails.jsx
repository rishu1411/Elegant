'use client'
import { ProductContext } from '@/Context/ProductContext'
import { useColorScheme } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import RotateRightIcon from '@mui/icons-material/RotateRight';
import { Button1 } from '@/components/Button';
import { CartContext } from '@/Context/CartContext';

function ProductDetails() {
    const { products, ID, isLoading } = useContext(ProductContext)
    const {addToCart} = useContext(CartContext)
    
        const View = products.filter((item) => {
            return item.id === ID
        })

    const items = products.find((item) => {
        return item.id === ID
    })

        
    return (
        <>
            {isLoading ?
                (<div className='flex items-center justify-center h-screen'><RotateRightIcon className='animate-spin text-pink-400' /></div>) :
            
                (<div className='container mx-auto xs:my-14 sm:my-0'>
                    <div className='h-screen md:h-screen flex items-center justify-center sm:justify-start '>
                        {
                            View.map((item) => {
                                return (
                                    <div key={item.id} className='flex flex-col sm:flex-row items-center gap-x-8 gap-y-6'>
                                        <div className='border py-10 px-5 shadow-md '><img src={item.image} alt="product image" className='h-44 lg:h-64' /></div>
                                        <div className=' space-y-3'>
                                            <h3 className='sm:w-80 text-base sm:text-2xl  font-semibold'>{item.title}</h3>
                                            <p className='text-pink-500'>$ { item.price}</p>
                                            <p className='sm:w-80 text-[12px] sm:text-sm overflow-y-auto max-h-60'><span className='font-semibold'>Description: </span>{ item.description}</p>
                                    
                                            <Button1 onClick={()=>addToCart(ID,items)} children='Add to Cart' className='px-2 w-auto py-1 rounded-sm text-white bg-black text-sm hover:bg-white hover:text-black border-2 border-black font-semibold transition duration-200'/>
                                        
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>)}
            </>
            )

}

export default ProductDetails