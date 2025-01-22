import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../../layout/CustomerLayout';
import formatToPHP from '../../../utils/formatToPHP';
import { FaTrash } from "react-icons/fa";



const Cart = () => {
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        throw new Error('Cart must be used within a CartContext.Provider');
    }

    const { cart, setCart } = cartContext;

    const removeItem = (id: string) => {
        setCart(cart.filter(item => item.productId !== id));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">Your Shopping Cart</h1>

            {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty. Start adding items!</p>
            ) : (
                <>
                    <div className="cart-header">
                        <div className="header-item header-product">Product</div>
                        <div className="header-item header-name">Name</div>
                        <div className="header-item header-price">Price</div>
                        <div className="header-item header-quantity">Quantity</div>
                        <div className="header-item header-actions"></div>
                    </div>

                    {cart.map((item) => (
                        <div className="cart-item" key={item.productId}>
                            <div className="img-wrapper">
                                <img src={item.imageData} alt={item.productName} className="product-image" />
                            </div>
                            <div className="product-name">{item.productName}</div>
                            <div className="product-price">{formatToPHP(item.price)}</div>
                            <div className="product-quantity">{item.quantity}</div>
                            <div className="actions">
                                <button className="remove-btn" onClick={() => removeItem(item.productId)}>
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="cart-footer">
                        <h2 className="total-label">Total: {formatToPHP(calculateTotal())}</h2>
                        <button className="checkout-btn">Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
