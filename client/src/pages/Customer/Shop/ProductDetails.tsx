import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetail.css';
import formatToPHP from '../../../utils/formatToPHP';
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoReturnDownBackOutline } from "react-icons/io5";
 
interface ProductDetailsType {
  categoryId: string;
  imageData: string;
  price: number;
  productName: string;
  stockQuantity: number;
  categoryName: string;
};

const ProductDetails = () => {
    const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [details, setDetails] = useState<ProductDetailsType | null>(null);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/product/${id}`);
      const { categoryId, imageData, price, productName, stockQuantity, category: { categoryName } } = response.data;
      setDetails({ categoryId, imageData, price, productName, stockQuantity, categoryName });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const goBackShop = () =>{
    navigate('/shop')
  }

  return (
    <div className="product-details-container">
        <IoReturnDownBackOutline className='back' onClick={goBackShop}/>
      <div className="product-image">
        <img src={details?.imageData} alt={details?.productName} />
      </div>
      <div className="product-info">
        <h1 className="product-name">{details?.productName}</h1>
        <p className="product-price">Price: {formatToPHP(details?.price || 0)}</p>
        <p className="product-stock">Stock: {details?.stockQuantity}</p>
        <p className="product-category">Category: {details?.categoryName}</p>
        <button className="add-to-cart-button">
          <span>Add to Cart</span>
          <PiShoppingCartSimpleFill className="cart-icon" />
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;