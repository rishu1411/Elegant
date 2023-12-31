import './globals.css'
import { Inter } from 'next/font/google'
import ProductProvider from '@/Context/ProductContext'
import NavBar from '@/components/NavBar'
import CartProvider from '@/Context/CartContext'
import Footer from '@/container/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Elegance',
  description: 'Generated by create next app',
  favicon: './favicon.svg'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <CartProvider>
        <ProductProvider>
          <NavBar/>
            {children}
            <Footer/>
        </ProductProvider>
            </CartProvider>
        </body>
    </html>
  )
}
