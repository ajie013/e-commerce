import axios from 'axios';
import  { useEffect, useState, useContext} from 'react';
import { CartContext } from '../../../layout/CustomerLayout';
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
  productId: string;
};

interface productType{
    imageData: string;
    productName: string;
    productId: string;
}

interface cartType{
    productName: string;
    productId: string;
    quantity: number;
    price: number;
    imageData: string;
}

const ProductDetails = () => {

  const cartContext = useContext(CartContext)
  if (!cartContext) {
    throw new Error('Navigation must be used within a UserContext.Provider');
  }

  const {cart, setCart } = cartContext;
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [details, setDetails] = useState<ProductDetailsType | null>(null);
  const [productList, setProductList] = useState<productType[] | null>(null);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/product/${id}`);
      const { categoryId, imageData, price, productName, stockQuantity,productId, category: { categoryName } } = response.data;
      setDetails({ categoryId, imageData, price, productName,productId ,stockQuantity, categoryName });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductList = async () =>{
    try {
        const response = await axios.get(`http://localhost:3001/product-list`);
        setProductList(response.data);
      } catch (error) {
        console.error(error);
      }
  };
  useEffect(() => {
    fetchProductDetails();
    fetchProductList();
  }, []);

  useEffect(() =>{
    fetchProductDetails();
  },[id])

  const goBackShop = () =>{
    navigate('/shop')
  }

  const ViewProduct = (id: string) =>{
        navigate(`/shop/product/${id}`)
  }

  const addToCart = () =>{
    const result = cart.find(item => item.productId === details?.productId)

    if(result){
        setCart(prev => prev.map((item : cartType) => item.productId === details?.productId ? {...item, quantity: item.quantity + 1} : item))
    }
    else{
        if(details?.price && details.productId && details.productName){
            setCart(prev => [...prev, {
                productName: details?.productName,
                productId: details?.productId,
                quantity: 1,
                price: details?.price,
                imageData: details.imageData
            }])
        }
      
    }
  }
  console.log(cart)

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
        <button className="add-to-cart-button" onClick={addToCart}>
          <span>Add to Cart</span>
          <PiShoppingCartSimpleFill className="cart-icon" />
        </button>
      </div>

      <div className='other-products'>
        {productList && productList.map((item) => item.productId != id  &&  <div key={item.productId} className='product-item' onClick={() => ViewProduct(item.productId)} title={item.productName}>
            <img src={item.imageData} alt="" />
        </div>)}
      </div>
    </div>
  );
};

export default ProductDetails;