import axios from 'axios'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import CheckoutPage from './pages/CheckoutPage'
import OrdersPage from './pages/OrdersPage'
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  useEffect(() => {
    axios.get('/api/cart-items').then((response) => {
      setCart(response.data)
      console.log(cart)
    })
  }, [])
  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/orders" element={<OrdersPage cart={cart} />} />
      </Routes>
    </>
  )
}

export default App
