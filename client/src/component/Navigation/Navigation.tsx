import './Navigation.css';
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion'

const Navigation = () => {
    return (
        <motion.div 
        // initial={{ y: -400 }} 
        // animate={{ 
        //   y: [-400, 0],           
        // }}
        // transition={{
        //   duration: 1.5,
        //   ease: [0.68, -0.55, 0.27, 1.55] 
        // }}
        className="navigation-container fade-in-nav">
            <div className='brand-wrapper'>
                <p>Logo</p>
            </div>
            <div className='navigation-links-wrapper'>
                <ul>
                
                <motion.li
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                    >
                        Home
                    </NavLink>
                </motion.li>

                <motion.li
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
                    <NavLink 
                        to="/shop" 
                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                    >
                        Shop
                    </NavLink>
                </motion.li>
                <motion.li
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                    >
                        About
                    </NavLink>
                </motion.li>
                <motion.li
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                    >
                        Contact
                    </NavLink>
                </motion.li>
                </ul>
            </div>
            <div className='right-section'>
                <ul>
                
                <motion.li
                   >
                    <NavLink to="/login" >
                        Log in
                    </NavLink>
                </motion.li>

                <motion.li
                    >
                    <NavLink to="/sign-up">
                        Sign in
                    </NavLink>
                </motion.li>

               
                </ul>
            </div>
        </motion.div>
    );
};

export default Navigation;