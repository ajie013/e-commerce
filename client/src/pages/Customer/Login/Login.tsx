import { FormEvent, useState } from 'react';
import './Login.css';
import axios from 'axios';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

interface credentialsType{
    password: string;
    username: string;
}

const Login = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState<credentialsType>({
        password: '',
        username: ''
    });

    const submitLogin = async (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        
        await axios.post('http://localhost:3001/login/validate', credentials, {withCredentials: true})
        .then((res) =>{
            alert('success')
            navigate('/')

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
