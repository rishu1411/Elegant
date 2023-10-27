'use client'
import React, { createContext, use, useEffect, useState } from 'react'

export const  ProductContext = createContext("");

function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [Class, setClass] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [ID, setID] = useState(null)
    const [view,setView] = useState(false)
    // console.log('Product',products)
   
   
    
    function IdSet(id) {
        sessionStorage.setItem('id', JSON.stringify(id))
       
        
    }
    

    useEffect(() => {
        setID(JSON.parse(sessionStorage.getItem('id')))
    })



    setTimeout(() => {
        if (ID === null) {
            
            setIsLoading(false)
        }
    }, 500)
    
    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await (response.json())
                setProducts(data)
                // localStorage.setItem('datas', JSON.stringify(data))
            }
            catch (error) { 
                console.log('Error fetching data:',error)
            }
        }
        fetchProducts()
    }, [])
    
    // useEffect(() => {
        
    //     setProducts(JSON.parse(localStorage.getItem('datas')))
    // },[])
    
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            
            return window.scrollY > 75 ? setClass('bg-orange-50'): setClass('')
        })
},[])
    
   
   
  return (
      <ProductContext.Provider value={{products,Class,isLoading,ID,IdSet}} >{children }</ProductContext.Provider>
  )
}

export default ProductProvider