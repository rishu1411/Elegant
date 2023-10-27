'use client'
import React, { useContext } from 'react'
import { CartContext } from '@/Context/CartContext'
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';
import { ProductContext } from '@/Context/ProductContext';


function Button({ product, id }) {
  const userAgent = navigator.userAgent
  const isMobile = /Mobile|tablet|iPhone|Android|WindowsPhone/.test(userAgent)
  const { addToCart } = useContext(CartContext)
  const {IdSet,products} = useContext(ProductContext)
  return (
    <div className={`absolute bg-red-500 flex flex-col justify-center items-center  ${isMobile? 'top-0 right-0 opacity-100':'top-4 -right-12 opacity-0 group-hover:right-6 group-hover:opacity-100'}  transition-all duration-500`}>
            <button onClick={()=>addToCart(id,product)} className='hover:bg-red-600'>
              <div className='text-white flex justify-center items-center w-12 h-12'>
                <AddIcon className='text-3xl'/>
              </div>
            </button>
            
            <Link href='/ProductDetails' onClick={()=>IdSet(id)} className='bg-white hover:bg-slate-200 w-12 h-12 flex justify-center items-center border'><VisibilityIcon className='text-primary'/></Link>
        </div>
  )
}

export function Button1({children,onClick,className}) {
  return (
    <button onClick={onClick} className={className}>{children }</button>
  )
}

export default Button