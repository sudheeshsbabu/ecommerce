import axios from 'axios';
import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Product from './Product';
import userEvent from '@testing-library/user-event';

vi.mock('axios');

describe('Product component', () => {
    let product, loadCart;

    beforeEach(() => {
        product = {
            id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            image: "images/products/intermediate-composite-basketball.jpg",
            name: "Intermediate Size Basketball",
            rating: {
                stars: 4,
                count: 127
            },
            priceCents: 2095,
            keywords: ["sports", "basketballs"]
        }
        loadCart = vi.fn();
    })

    it('renders the product details correctly', () => {
        render(<Product product={product} loadCart={loadCart} />)
        expect(
            screen.getByText(product.name)
        ).toBeInTheDocument()
        expect(
            screen.getByText('$20.95')
        ).toBeInTheDocument()
        expect(
            screen.getByTestId('product-image')
        ).toHaveAttribute('src', product.image)
        expect(
            screen.getByTestId('product-rating-stars')
        ).toHaveAttribute('src', `images/ratings/rating-${(parseFloat(product.rating.stars) * 10).toFixed(0)}.png`);

    });

    it('adds a product to the cart', async () => {
        render(<Product product={product} loadCart={loadCart} />)
        const user = userEvent.setup();
        const addToCartButton = screen.getByTestId('add-to-cart-button');
        await user.click(addToCartButton);
        expect(axios.post).toHaveBeenCalledWith('/api/cart-items', {
            productId: product.id,
            quantity: 1
        })
        expect(loadCart).toHaveBeenCalled();
    })
})