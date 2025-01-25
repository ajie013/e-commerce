import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { UserContext } from '../../layout/CustomerLayout';
import userIcon from '../../assets/user.png';

interface userType {
    userId: string;
    firstName: string;
    lastName: string;
    imageData: string;
}

const Navigation = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('Navigation must be used within a UserContext.Provider');
    }

    const { currentUser } = context;
    const [data, setData] = useState<userType | null>(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const fetchData = () => {
        if (currentUser) {
            axios.get(`http://localhost:3001/user/${currentUser}`)
                .then((res) => {
                    const { userId, userdetails: { firstName, lastName, imageData } } = res.data;
                    setData({ userId, firstName, lastName, imageData });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    useEffect(() => {
        if (currentUser) {
            fetchData();
        }
    }, [currentUser]);

    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

    return (
        <motion.div className="navigation-container fade-in-nav">
            <div className="brand-wrapper">
                <p>Logo</p>
            </div>
            <div className="navigation-links-wrapper">
                <ul>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <NavLink to="/shop" className={({ isActive }) => (isActive ? 'active-link' : '')}>Shop</NavLink>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>About</NavLink>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>Contact</NavLink>
                    </motion.li>
                </ul>
            </div>
            <div className="right-section">
                {data ? (
                    <div className="user-wrapper">
                        <motion.div whileHover={{scale: 1.1}} transition={{duration: 0.5}} className="cart-wrapper">
                            <NavLink to="/cart">
                                <PiShoppingCartSimpleFill className="cart" />
                            </NavLink>
                            
                        </motion.div>
                        <motion.div  whileTap={{scale: 0.9}} className="profile-wrapper" onClick={toggleDropdown}>
                            <img src={data?.imageData || userIcon} alt="Profile" />
                            {dropdownVisible && (
                                <div className="profile-dropdown">
                                    <p>
                                        <NavLink to="/profile">Profile</NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="/order-history">Order History</NavLink>
                                    </p>
                                    <p>Logout</p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                ) : (
                    <ul>
                        <motion.li>
                            <NavLink to="/login">Log in</NavLink>
                        </motion.li>
                        <motion.li>
                            <NavLink to="/sign-up">Sign in</NavLink>
                        </motion.li>
                    </ul>
                )}
            </div>
        </motion.div>
    );
};

export default Navigation;
