import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { ProductGrid } from './ProductGrid'
import './HomePage.css'

function HomePage({ cart }) {
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
        axios.get('/api/products').then((response) => {
            setProducts(response.data)
        })
    }, [])

    return (
        <>
            <title>Home</title>
            <Header cart={cart} />
            <div className="home-page">
                <ProductGrid products={products} />
            </div>
        </>
    )
}
export default HomePage;