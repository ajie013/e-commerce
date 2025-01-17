import { Outlet } from 'react-router-dom'
import './styles/CustomerLayout.css'
import Navigation from '../component/Navigation/Navigation'

const CustomerLayout = () =>{
    return(
        <>
            <div className='customer-layout-container'>
                <Navigation/>
                <Outlet/>
               
            </div>
         
        </>
    )
}

export default CustomerLayout