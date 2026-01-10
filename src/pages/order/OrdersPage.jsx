import axios from 'axios'
import { useState, useEffect } from 'react'
import './OrdersPage.css'
import Header from '../../components/Header'
import Orders from './Orders'

function OrdersPage({ cart }) {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios.get('/api/orders?expand=products')
            .then(response => {
                setOrders(response.data)
            })
            .catch(error => {
                console.log(error)
            })
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