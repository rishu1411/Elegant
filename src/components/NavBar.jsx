'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
import logo from '../assets/Logo2.png'
import Image from 'next/image'
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu'
import FavoriteIcon from '@mui/icons-material/Favorite';
import SIdeBar from './SIdeBar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { CartContext } from '@/Context/CartContext'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { ProductContext } from '@/Context/ProductContext';


function BadgeIcon() {
  const { cart } = useContext(CartContext)
 
  return (
    
    <Badge badgeContent={cart.length} color='primary' margin='0' className='m-0 p-0'>
      <ShoppingBagIcon className='text-black '/>
  </Badge>
  )
}


function Icons({icons,text}) {
  return (
    <span className='flex flex-col text-xs items-center font-semibold '>
      <Link href='' className='md:text-sm lg:text-base'>{ icons}</Link>
      <span className='hidden md:flex ' >{text }</span>
  </span>
  )
}

function Cart() {
  return (
    <span className='m-0 p-0'><ShoppingCartIcon/>Shopping Cart</span>
  )
}


export default function NavBar() {
  const {Class} = useContext(ProductContext)
  return (
    <header className={`fixed w-full top-0 z-10 ${Class&&'bg-orange-50'} transition-all duration-200 lg:px-8 md:px-6 px-4  `}>

          <div className='   flex items-center justify-between h-16 order-2 md:order-1'>
        <SIdeBar children={<MenuIcon />} anchor='left' className='block md:hidden' icon={ <ArrowBackIcon/>} text='Menu' />
              
              <div className=''>
            {/* logo */}
            <Image src={logo} alt="logo" height={200} width={200}/>
              </div>
          <div className='md:flex justify-center items-center gap-x-3 font-semibold hidden order-2 md:text-sm lg:text-base'>
            <Link href='/' className='hover:text-amber-400'>Men</Link>
            <Link href='/' className='hover:text-amber-400'>Women</Link>
            <Link href='/' className='hover:text-amber-400'>Kids</Link>
            <Link href='/' className='hover:text-amber-400'>Home&Living</Link>
            <Link href='/' className='hover:text-amber-400'>Beauty</Link>
                  
          </div>
          <div className="flex items-center justify-center md:gap-x-4 gap-x-3 order-3">
            <Icons icons={ <PersonIcon/>} text='Profile' />
           <Icons icons={<FavoriteIcon/>} text='Wishlist'/>
          <Icons icons={<SIdeBar anchor='right'  text={<Cart/> } icon={ <ArrowForwardIcon/>}  children={<BadgeIcon />} />} text='Bag'/>
            
          </div>
      </div>
   
      </header>
   
  )
}
