import React, { useContext } from 'react'
import { Button1 } from './Button'
import ClearIcon from '@mui/icons-material/Clear';
import { CartContext } from '@/Context/CartContext';

export default function CartItem({ item }) {
  const { id, title, image, price, amount } = item
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)
  const total = (amount * price).toFixed(2)
  
  return (
    <>
      
        <Button1 children={<ClearIcon />} onClick={()=>removeFromCart(id)} className='relative xs:hidden left-32'/>
        

    <div className='py-8 px-2 xs:px-4 lg:px-6 border-b flex flex-row gap-y-4 items-center gap-x-3 lg:gap-x-6  '>
    
    <div className=''>
        <img src={image} alt='Product image' className='h-20 w-20' />
    </div>

    <div className='w-full space-y-4'>
      <div className='flex xs:items-start items-center justify-center xs:justify-between'>
        <h3 className='text-sm lg:text-base font-semibold w-40 lg:w-56'>{title}</h3>
        <Button1 children={<ClearIcon />} onClick={()=>removeFromCart(id)} className='hidden xs:block'/>
      </div>

      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-3 lg:gap-x-6'>
          <div className='border space-x-2 flex items-center justify-center'>
            <Button1 children='-' onClick={() => decreaseAmount(id)} className='w-auto px-2'/>
            <span className=' text-sm lg:text-base'>{amount}</span>
            <Button1 children='+' onClick={() => increaseAmount(id)} className='w-auto px-2'/>
          </div>
          <span className='text-sm lg:text-base font-medium text-gray-500'>$ {price }</span>
        </div>
        <span className='text-sm lg:text-base font-semibold'>$ { total}</span>
      </div>

    </div>
 
      </div>
      </>
  )
}
