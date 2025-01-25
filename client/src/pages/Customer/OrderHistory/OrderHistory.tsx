import { useEffect, useState } from 'react';
import './OrderHistory.css';
import axios from 'axios';
import getUser from '../../../utils/getUser';
import formatToPHP from '../../../utils/formatToPHP';
import convertToDate from '../../../utils/formatDate';
interface orderItemType {
    quantity: number;
    product: productType;
}

interface productType {
    productName: string;
}

interface historyType {
    orderDate: string;
    status: string;
    totalAmount: number;
    orderitem: orderItemType[];
}

const OrderHistory = () => {
    const [history, setHistory] = useState<historyType[]>([]);

    const fetchHistory = async () => {
        try {
            const id = await getUser();
            const res = await axios.get(`http://localhost:3001/order-history/${id}`);
            setHistory(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchHistory();
    }, []);

    return (
        <div className="order-history">
            <h2 className="order-history-title">Order History</h2>
            {history.length > 0 ? (
                history.map((order, index) => (
                    <div key={index} className="order-item">
                        <div className="order-header">
                            <span>Order Date: <strong>{convertToDate(order.orderDate)}</strong></span>
                            <span>Status: <strong>{order.status}</strong></span>
                        </div>
                        <div className="order-details">
                            <p className="total-amount">Total Amount: <strong>{formatToPHP(order.totalAmount)}</strong></p>
                            <h4>Items:</h4>
                            <ul>
                                {order.orderitem.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        {item.product.productName} (Quantity: {item.quantity})
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))
            ) : (
                <p className="no-orders">You have no order history.</p>
            )}
        </div>
    );
};

export default OrderHistory;
