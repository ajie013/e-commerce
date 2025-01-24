import './Home.css';
import axios from 'axios';
import { useEffect, useState, } from 'react';
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

const Home: React.FC = () => {
    const navigate = useNavigate()
    const [productList, setProductList] = useState<ProductType[]>([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/product-list');
            setProductList(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const showNow = () =>{
        navigate('/shop')
    };

    const viewProduct = (id: string) =>{
        navigate(`/shop/product/${id}`)
    }
    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="hero">
                <h1>Welcome to X-Tech</h1>
                <p>Your one-stop shop for quality products!</p>
                <button className="shop-now-btn" onClick={showNow}>Shop Now</button>
            </div>

            {/* Featured Products Section */}
            <div className="featured-products">
                <h2>Featured Products</h2>
                <div className="products-grid">
                    {productList.map((product) => (
                       <div className="product-card">
                       <img src={product.imageData} alt={product.productName} className="product-image" />
                       <h3>{product.productName}</h3>
                       {/* <p>Category: {product.categoryName}</p> */}
                       <p>Price: ${formatToPHP(product.price)}</p>
                       <button className="add-to-cart-btn" onClick={() => viewProduct(product.productId)}>View</button>
                   </div>
                   
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
