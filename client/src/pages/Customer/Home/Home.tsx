import './Home.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface productType{
    productName: string;
    categoryName: string;
    price: number;
    productId: string;
    stockQuantity: number;
    createdAt: Date;

}
const Home: React.FC = () =>{

    const [productList, setProductList] = useState();
    const fetchProduct =  async () =>{
        const response = await axios.get('http://localhost:3001/product-list')
        console.log(response.data)
    };

    useEffect(() =>{
        fetchProduct();
    },[])


    return(
        <>
            <h1>Home page Customer</h1>
        </>
    )
}

export default Home