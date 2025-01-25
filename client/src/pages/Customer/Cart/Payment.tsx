import './Payment.css';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../layout/CustomerLayout';
import Cookies from 'js-cookie'
import formatToPHP from '../../../utils/formatToPHP';
import getUser from '../../../utils/getUser';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { pre } from 'framer-motion/client';

interface summaryType{
    discount: number
    totalAmount: number;
    grandTotal: number;
    userId: string
    paymentMethod: string;
    deliveryFee: number
}

interface paymentProps {
    total: number
    setIsShowPayment: React.Dispatch<React.SetStateAction<boolean>>
}

const Payment: React.FC<paymentProps> = ({total,setIsShowPayment}) => {
    const navigate = useNavigate();
    const cartContext = useContext(CartContext)
    const [summary, setSummary] = useState<summaryType>({
        discount: 0,
        totalAmount: total,
        paymentMethod: "Cash on Delivery",
        deliveryFee: 20,
        userId: '',
        grandTotal: 0

    })

    if (!cartContext) {
        throw new Error('Cart must be used within a CartContext.Provider');
    }

    const {cart, setCart} = cartContext

    useEffect(() =>{

        const getUserId = async () =>{
            try{
                let userId = await getUser()
                setSummary(prev => ({...prev, userId}))
            }
            catch(err){
                console.log(err)
            }
        };

        getUserId();

        setSummary(prev => ({...prev, grandTotal: calculateGrandTotal()}))
    },[])

    
    const handleConfirmPayment = () => {
        axios.post('http://localhost:3001/payment', {summary, cart})
        .then((res) => {
            alert('transaction complete')
            navigate('/cart');
            setCart([])
            setIsShowPayment(prev => !prev)
        })
        .catch((err) => {
           console.log(err)
        })
       
    };

    const calculateGrandTotal = () =>{
        return summary.totalAmount + summary.deliveryFee
    }

    return (
        <div className="payment-modal">
            <div className="payment-content">
                <h2>Order Payment</h2>

                {/* Order Summary Section */}
                <div className="order-summary">
                    <div className="order-item">
                        <span>Order Total:</span>
                        <span>{ formatToPHP(summary.totalAmount)}</span>
                    </div>
                    <div className="order-item">
                        <span>Delivery Fee:</span>
                        <span>{formatToPHP(summary.deliveryFee)}</span>
                    </div>
                    <div className="order-item grand-total">
                        <span>Grand Total:</span>
                        <span>{formatToPHP(summary.grandTotal)}</span>
                    </div>
                </div>

                {/* Payment Instructions */}
                <div className="payment-instructions">
                    <p>
                        This is a Cash on Delivery order. Please ensure you have the total amount ready for the delivery.
                    </p>
                </div>

                {/* Confirm Payment Button */}
                <button className="confirm-payment-button" onClick={handleConfirmPayment}>
                    Confirm Order
                </button>
            </div>
        </div>
    );
};

export default Payment;
