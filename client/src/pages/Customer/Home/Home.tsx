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
    imageData: string
    category: {categoryId: string, categoryName: string}
}

const Home: React.FC = () =>{

    const [productList, setProductList] = useState<productType[]>([]);
    // const fetchProduct =  async () =>{
    //     try{
    //         const response = await axios.get('http://localhost:3001/product-list')
    //         setProductList(response.data)
    //     }
    //     catch(error){
    //         console.log(error)
    //     }  
        
    // };

  

    // useEffect(() =>{
    //     fetchProduct();
    // },[])


    return(
        <>
            <h1>Home page Customer</h1>
           
        </>
    )
}

export default Home