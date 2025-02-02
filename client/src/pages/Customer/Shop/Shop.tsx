import './Shop.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import formatToPHP from '../../../utils/formatToPHP';
import { useNavigate } from 'react-router-dom';

interface ProductType {
    productName: string;
    categoryName: string;
    price: number;
    productId: string;
    stockQuantity: number;
    createdAt: Date;
    imageData: string;
    category: { categoryId: string; categoryName: string };
}

const Shop: React.FC = () => {

    const navigate = useNavigate()
    const [productList, setProductList] = useState<ProductType[]>([]);

    const fetchProduct = async () => {
        try {
            const response = await axios.get('http://localhost:3001/product-list');
            setProductList(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    const ViewProduct = (id: string) =>{
        navigate(`/shop/product/${id}`)
    }

    return (
        <div className="shop-container">
            <div className="product-list-grid">
                {productList.length > 0 ? productList.map((item) => (
                    <div key={item.productId} className="product-item" onClick={() => ViewProduct(item.productId)}>
                        <div className="product-image-wrapper">
                            <img src={item.imageData} loading='lazy' alt={item.productName} />
                        </div>
                        <span className="product-name">{item.productName}</span>
                        <span className="product-price">{formatToPHP(item.price)}</span>
                    </div>
                )): <p>No data...</p>}
            </div>
        </div>
    );
};

export default Shop;
