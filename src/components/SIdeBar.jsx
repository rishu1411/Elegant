'use client'
import React, { useContext, useState } from 'react'
import { Drawer, Box, Typography, IconButton, List, ListItem, Divider } from '@mui/material'
import CartItem from './CartItem'
import { CartContext } from '@/Context/CartContext'
import { Button1 } from './Button'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


function ShoppingCart() {
  const { cart,total,deleteCart } = useContext(CartContext)
// console.log('Helllo total',total) 
  console.log('Cart',cart.length)
    
 
  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='overflow-y-auto h-[60vh]'>
        {
          cart.length <1 && ( <div className='my-8'> Your Cart Is Empty </div>)
        }
       
        {cart.map((item, key) => {
        return (
                      
            <CartItem item={item} key={key} />      

        )
      })}
      </div>
      <div className='border-t mb-3'> 
        <div className='flex justify-between items-center my-2'>
          <span className='font-semibold text-lg'>Total: $ {total}</span>
          <Button1 children={<DeleteOutlineOutlinedIcon/> } className='w-auto text-white flex items-center  p-1 h-8 rounded-sm bg-red-500 transition duration-200 hover:ring-4 ring-red-200 ' onClick={deleteCart}/>
        </div>
        <div className='space-y-3 '>
          <Button1 children='View Cart' className='min-w-full bg-gray-200 text-base py-2  font-semibold' />
          <Button1 children='Checkout' className='min-w-full  text-base py-2 bg-black font-semibold text-white rounded-sm' />
        </div>
      </div>
        </div>
    
  )
}

export default function SIdeBar({children,anchor,className,icon,text }) {
  
  const [IsOpen, setIsOpen] = useState(false)

  return (
    <div className={className}>
      <button onClick={() => setIsOpen(true)} className=''>{children}</button>
    <Drawer anchor={anchor}
      open={IsOpen}
        onClose={() => setIsOpen(false)}
        className={`${anchor==='left'&&'md:hidden block'}`}
       
    >
        <Box p={2}   className={`${anchor=== 'left'&&"bg-orange-200"} h-full ${anchor==='left'?'sm:w-[50vh] w-[250px] block md:hidden':'w-screen'} w-screen md:w-[50vw]`}
          textAlign='center' role='presentation'> 
          <div className='flex items-center justify-between '>
            <span className='font-medium'>{text }</span>
            <IconButton onClick={() => setIsOpen(false)} className={`flex items-end text-black`}>{icon}</IconButton>

          </div>
          <Divider/>
          <Typography variant='h5' component='div' >
            {anchor === 'left' ? '' : <ShoppingCart  />}
        </Typography>

      </Box>

      </Drawer>
      </div>
  )
}
