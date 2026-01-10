import axios from 'axios'
import { useState, useEffect } from 'react'
import './OrdersPage.css'
import Header from '../../components/Header'
import Orders from './Orders'

function OrdersPage({ cart }) {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const getOrdersData = async () => {
            let response = await axios.get('/api/orders?expand=products')
            setOrders(response.data)
        }
        getOrdersData()
    }, [])
    return (
        <>
            <title>Orders</title>
            <Header cart={cart} />
            <Orders orders={orders} />
        </>
    )
}
export default OrdersPage