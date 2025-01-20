import { Outlet } from 'react-router-dom'
import './styles/CustomerLayout.css'
import Navigation from '../component/Navigation/Navigation'
import { createContext,useEffect,useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie'

interface contextType {
    setCurrentUser: React.Dispatch<React.SetStateAction<string | null>>;
    currentUser: string | null
}

interface userType{
    userId : string
    role : string
}

export const UserContext = createContext<contextType | undefined>(undefined);

const CustomerLayout = () =>{

    const [currentUser, setCurrentUser] = useState<string | null>(null);
    const getToken = () =>{
        const token = Cookies.get('token');

        if (token) {
            try {
                
                const decoded = jwtDecode<userType>(token);
                setCurrentUser (decoded.userId);
                console.log('Current User has been set')
            } catch (error) {
                console.error('Failed to decode token:', error);
            }
        } 
        else 
        {
            console.log('Token not found');
        }
    }
    useEffect(() =>{
        getToken();
    },[])

   console.log(currentUser)

    return(
        <>
            <UserContext.Provider value={{ currentUser , setCurrentUser  }}>
            <div className='customer-layout-container'>
                <Navigation />
                <Outlet  context={{ setCurrentUser  }}/>
            </div>
         </UserContext.Provider>
         
        </>
    )
}

export default CustomerLayout