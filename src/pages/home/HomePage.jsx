import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { ProductGrid } from './ProductGrid'
import './HomePage.css'

function HomePage({ cart, loadCart }) {
    // Method 1
    // fetch('http://localhost:3000/api/products').then((response) => {
    //     response.json().then((data) => {
    //         console.log(data)
    //     })
    // })

    // Method 2
    // fetch('http://localhost:3000/api/products').then((response) => {
    //     return response.json()
    // }).then((data) => {
    //     console.log(data)
    // })

    // Method 3
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getHomeData = async () => {
            const response = await axios.get('/api/products')
            setProducts(response.data)
        }
        getHomeData()
    }, [])

    return (
        <>
            <title>Home</title>
            <Header cart={cart} />
            <div className="home-page">
                <ProductGrid products={products} loadCart={loadCart} />
            </div>
        </>
    )
}
export default HomePage;