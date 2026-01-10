import { CartItem } from './CartItem'

export function OrderSummary({ cart, deliveryOptions }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const deliveryOption = deliveryOptions.find((deliveryOption) => {
                    return deliveryOption.id === cartItem.deliveryOptionId
                })
                return (
                    <CartItem key={cartItem.id} cartItem={cartItem} deliveryOption={deliveryOption} deliveryOptions={deliveryOptions} />
                )
            })}
        </div>
    )
}