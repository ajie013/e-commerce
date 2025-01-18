import './SignUp.css';

const SignUp = () => {
    return (
        <div className="sign-up-container">
            <div className="sign-up-wrapper">
                <h1 className="sign-up-header">Sign Up</h1>
                <form>
                    {/* First Name and Last Name */}
                    <div className="row">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" placeholder="First Name" />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" placeholder="Last Name" />
                        </div>
                    </div>

                    {/* Address and Contact */}
                    <div className="row">
                        <div>
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" placeholder="Address" />
                        </div>
                        <div>
                            <label htmlFor="contact">Contact</label>
                            <input type="text" id="contact" placeholder="Contact Number" />
                        </div>
                    </div>

                    {/* Username */}
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username" />

                    {/* Password */}
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" />

                    {/* Email */}
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Email" />

                    {/* Submit Button */}
                    <button type="submit" className="submit-sign-up-btn">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
