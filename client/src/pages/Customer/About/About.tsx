import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {

    const navigate = useNavigate()
    const shopNow = () =>{
        navigate('/shop')
    }

    return (
        <div className="about-container">
            {/* Hero Section */}
            <div className="about-hero">
                <h1>Welcome to X-Tech</h1>
                <p>
                    At X-Tech, we combine innovation, quality, and customer-centric solutions to deliver
                    an exceptional shopping experience. Empowering you with cutting-edge products
                    is at the core of our mission.
                </p>
            </div>

            {/* Company Story Section */}
            <div className="about-section">
                <h2>Our Story</h2>
                <p>
                    X-Tech was founded with a vision to revolutionize the way people shop for
                    technology. From humble beginnings as a small startup, we have grown into a
                    trusted name in e-commerce, known for our commitment to quality and
                    innovation. Our journey has been fueled by a passion for empowering our
                    customers with the latest and greatest in tech.
                </p>
            </div>

            {/* Mission and Vision Section */}
            <div className="about-section">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to bridge the gap between technology and people, making it
                    accessible, affordable, and impactful. We believe that technology has the power
                    to transform lives, and we are dedicated to making that transformation a reality
                    for everyone.
                </p>
                <h2>Our Vision</h2>
                <p>
                    To be a global leader in the tech-driven e-commerce space, setting new
                    standards for quality, innovation, and customer satisfaction. We envision a
                    world where technology is seamlessly integrated into everyday life, empowering
                    individuals and businesses alike.
                </p>
            </div>

            {/* Core Values Section */}
            <div className="about-section">
                <h2>Our Core Values</h2>
                <ul>
                    <li>
                        <strong>Innovation:</strong> Constantly pushing the boundaries to bring you
                        cutting-edge solutions.
                    </li>
                    <li>
                        <strong>Customer Focus:</strong> Your satisfaction drives everything we do.
                    </li>
                    <li>
                        <strong>Integrity:</strong> Upholding the highest standards of transparency
                        and honesty.
                    </li>
                    <li>
                        <strong>Excellence:</strong> Striving for perfection in every product and service.
                    </li>
                </ul>
            </div>

            {/* Why Choose Us Section */}
            <div className="about-section">
                <h2>Why Choose X-Tech?</h2>
                <p>
                    At X-Tech, we don't just sell products; we deliver value. Here’s what makes us
                    stand out:
                </p>
                <ul>
                    <li>Extensive range of high-quality tech products</li>
                    <li>Competitive pricing with unmatched value</li>
                    <li>Reliable and fast delivery services</li>
                    <li>Exceptional customer support at every step</li>
                </ul>
            </div>

            {/* Call-to-Action Section */}
            <div className="about-cta">
                <h2>Ready to Experience the X-Tech Difference?</h2>
                <p>Explore our products and take your tech game to the next level.</p>
                <button className="cta-button" onClick={shopNow}>Shop Now</button>
            </div>
        </div>
    );
};

export default About;
