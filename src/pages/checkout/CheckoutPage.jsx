import axios from 'axios'
import { useEffect, useState } from 'react'
import './checkout-header.css'
import './CheckoutPage.css'
import Header from '../../components/Header'
import { CheckoutHeader } from './CheckoutHeader'
import { OrderSummary } from './OrderSummary'
import { PaymentSummary } from './PaymentSummary'

function CheckoutPage({ cart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);
    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime').then((response) => {
            setDeliveryOptions(response.data)
        })
        axios.get('/api/payment-summary').then((response) => {
            setPaymentSummary(response.data)
        })
    }, [])
    return (
        <>
            <title>Checkout</title>
            <Header cart={cart} />
            <CheckoutHeader paymentSummary={paymentSummary} />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />
                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    )
}
export default CheckoutPage;