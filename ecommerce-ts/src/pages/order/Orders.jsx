import OrderHeader from './OrderHeader'
import OrderDetails from './OrderDetails'

function Orders({ orders }) {
    return (
        <div className="orders-page">
            <div className="page-title">Your Orders</div>
            <div className="orders-grid">
                {orders.map((order) => {
                    return (
                        <div key={order.id} className="order-container">
                            <OrderHeader order={order} />
                            <OrderDetails order={order} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Orders