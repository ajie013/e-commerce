import { Outlet } from 'react-router-dom';
import './styles/CustomerLayout.css';
import Navigation from '../component/Navigation/Navigation';
import { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

interface contextType {
    setCurrentUser:React.Dispatch<React.SetStateAction<string | null>>;
    currentUser:string | null;
}

interface userType {
    userId: string;
    role: string;
}

interface cartType {
    productName: string;
    productId: string;
    quantity: number;
    price: number;
    imageData : string
}

// User Context
export const UserContext = createContext<contextType | undefined>(undefined);

// Cart Context
interface cartContextType {
    cart: cartType[];
    setCart: React.Dispatch<React.SetStateAction<cartType[]>>;
}

export const CartContext = createContext<cartContextType | undefined>(undefined);

const CustomerLayout = () => {
    const [cart, setCart] = useState<cartType[]>([]);
    const [currentUser , setCurrentUser ] = useState<string | null>(null);

    const getToken = () => {
        const token = Cookies.get('token');

        if (token) {
            try {
                const decoded = jwtDecode<userType>(token);
                setCurrentUser (decoded.userId);
                console.log('Current User has been set');
            } catch (error) {
                console.error('Failed to decode token:', error);
            }
        } else {
            console.log('Token not found');
        }
    };

    useEffect(() => {
        getToken();
    }, []);

    console.log(currentUser );

    return (
        <UserContext.Provider value={{ currentUser , setCurrentUser  }}>
            <CartContext.Provider value={{ cart, setCart }}>
                <div className='customer-layout-container'>
                    <Navigation />
                    <Outlet />
                </div>
            </CartContext.Provider>
        </UserContext.Provider>
    );
};

export default CustomerLayout;