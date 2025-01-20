import { FormEvent, useState, useContext } from 'react';
import './Login.css';
import axios from 'axios';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../layout/CustomerLayout';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie'

interface credentialsType{
    password: string;
    username: string;
}


interface userType{
    userId : string
    role : string
}
const Login = () => {
    const navigate = useNavigate();
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('Navigation must be used within a UserContext.Provider');
    }
    const { setCurrentUser  } = context;

    const [credentials, setCredentials] = useState<credentialsType>({
        password: '',
        username: ''
    });


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
    const submitLogin = async (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        console.log('Submit Login')
        await axios.post('http://localhost:3001/login/validate', credentials, {withCredentials: true})
        .then((res) =>{
            alert('success')
            navigate('/')
            getToken();
            

        })
        .catch((err) =>{
            console.log(err.response.data.error)
            alert(err.response.data.error)
        })
       
       
    };

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <h1 className="login-header">Log In</h1>
                <form onSubmit={submitLogin}>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={credentials.username} id="username" placeholder="Enter your username" onChange={(e) => setCredentials(prev => ({...prev, username: e.target.value}))} required/>

                    <label htmlFor="password">Password</label>
                    <input type="password" value={credentials.password} id="password" placeholder="Enter your password" onChange={(e) => setCredentials(prev => ({...prev, password: e.target.value}))} required/>

                    <p><a href="#">Forgot password?</a></p>
                    <button type="submit" className="submit-login-btn">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
