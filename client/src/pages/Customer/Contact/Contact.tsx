import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            {/* Header Section */}
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>
                    Have questions or need assistance? Our team is here to help. Reach out to us
                    through the form below or use any of the contact details provided.
                </p>
            </div>

            {/* Contact Form Section */}
            <div className="contact-form-section">
                <h2>Get in Touch</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Write your message" rows={5} required />
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>

            {/* Contact Details Section */}
            <div className="contact-details">
                <h2>Our Contact Information</h2>
                <ul>
                    <li>
                        <strong>Email:</strong> support@xtech.com
                    </li>
                    <li>
                        <strong>Phone:</strong> +1 (123) 456-7890
                    </li>
                    <li>
                        <strong>Address:</strong> 123 Tech Lane, Innovation City, USA
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
