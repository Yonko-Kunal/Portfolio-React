import React from 'react';
import './footer.css'; // Optional: Create a CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Portfolio. All Rights Reserved.</p>
                <div className="social-links">
                    {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> */}
                    {/* <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> */}
                    {/* <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> */}
                    <a href="https://github.com/Yonko-Kunal" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
