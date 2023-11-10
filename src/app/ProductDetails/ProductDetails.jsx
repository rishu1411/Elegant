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
            
                (<div className='container mx-auto mt-10'>
                    <div className='h-screen  flex flex-col xs:flex-row items-center justify-center sm:justify-start gap-x-8 gap-y-8 '>
                        {
                            View.map((item) => {
                                return (
                                    <>
                                        <img src={item.image} alt="product image" className='h-44 lg:h-64 mt-10' />
                                        <div className=' space-y-3'>
                                            <h3 className='sm:w-80 text-base sm:text-2xl  font-semibold'>{item.title}</h3>
                                            <p className='text-pink-500'>$ { item.price}</p>
                                            <p className='sm:w-80 text-[12px] sm:text-sm overflow-y-auto max-h-40 xs:max-h-60'><span className='font-semibold'>Description: </span>{ item.description}</p>
                                    
                                            <Button1 onClick={()=>addToCart(ID,items)} children='Add to Cart' className='px-2 w-auto py-1 rounded-sm text-white bg-black text-sm hover:bg-white hover:text-black border-2 border-black font-semibold transition duration-200'/>
                                        
                                        </div>
                                        </>

                                  
                                )
                            })
                        }
                    </div>
                </div>)}
            </>
            )

}

export default ProductDetails