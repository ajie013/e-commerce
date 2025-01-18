import { FormEvent, useState } from 'react';
import './SignUp.css';
import axios from 'axios';


interface userDetailsType{
    firstName: string
    lastName: string
    address: string
    contact: string
    email: string
    username: string
    password: string
    confirmPassword: string;
}

const SignUp = () => {
    const [userDetails, setUserDetails] = useState<userDetailsType>({
        firstName: '',
        lastName: '',
        address: '',
        contact: '',
        email: '',
        username: "",
        password: '',
        confirmPassword: ''
    })

    const submitLogin = async (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        if(userDetails.password !== userDetails.confirmPassword){
            alert('Password does not match')
            return;
        }

        console.log(userDetails)
        try{
            await axios.post('http://localhost:3001/sign-up/create', userDetails);
            alert('New User Created')
            setUserDetails({
                firstName: '',
                lastName: '',
                address: '',
                contact: '',
                email: '',
                username: "",
                password: '',
                confirmPassword: ''
            });
        }
        catch(err){
            console.log(err)
        }
       
        
    }
    return (
        <div className="sign-up-container">
            <div className="sign-up-wrapper">
                <h1 className="sign-up-header">Sign Up</h1>
                <form onSubmit={submitLogin}>
                    {/* First Name and Last Name */}
                    <div className="row">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" value={userDetails.firstName} id="firstName" placeholder="First Name" onChange={(e) => setUserDetails(prev => ({...prev, firstName: e.target.value}))}  required/>
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text"  value={userDetails.lastName} id="lastName" placeholder="Last Name" onChange={(e) => setUserDetails(prev => ({...prev, lastName: e.target.value}))} required/>
                        </div>
                    </div>

                    {/* Address and Contact */}
                    <div className="row">
                        <div>
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address"  value={userDetails.address} placeholder="Address" onChange={(e) => setUserDetails(prev => ({...prev, address: e.target.value}))} required />
                        </div>
                        <div>
                            <label htmlFor="contact">Contact</label>
                            <input type="text" id="contact"  value={userDetails.contact} placeholder="Contact Number" onChange={(e) => setUserDetails(prev => ({...prev, contact: e.target.value}))} required/>
                        </div>
                    </div>

                    {/* Email */}
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"  value={userDetails.email} placeholder="Email" onChange={(e) => setUserDetails(prev => ({...prev, email: e.target.value}))} required />
                    
                    {/* Username */}
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username"  value={userDetails.username} placeholder="Username" onChange={(e) => setUserDetails(prev => ({...prev, username: e.target.value}))} required/>

                    {/* Password */}
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"  value={userDetails.password} placeholder="Password" onChange={(e) => setUserDetails(prev => ({...prev, password: e.target.value}))} required/>

                     {/*Confirm  Password */}
                     <label htmlFor="password">Confirm Password</label>
                    <input type="password" value={userDetails.confirmPassword} placeholder="Confirm Password" onChange={(e) => setUserDetails(prev => ({...prev, confirmPassword: e.target.value}))} required/>                    

                    {/* Submit Button */}
                    <button type="submit"  className="submit-sign-up-btn">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
