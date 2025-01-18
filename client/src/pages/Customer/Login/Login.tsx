import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-wrapper">
                <h1 className="login-header">Log In</h1>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" />

                    <p><a href="#">Forgot password?</a></p>
                    <button type="submit" className="submit-login-btn">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
