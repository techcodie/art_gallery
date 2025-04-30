import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Art Gallery</h3>
                        <p>Discover the world's most beautiful artworks and explore the rich history of art through our curated collection.</p>
                        <div className="social-links">
                            <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="social-link"><i className="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/artists">Artists</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Categories</h4>
                        <ul className="footer-links">
                            <li><Link to="/gallery?category=renaissance">Renaissance</Link></li>
                            <li><Link to="/gallery?category=impressionism">Impressionism</Link></li>
                            <li><Link to="/gallery?category=modern">Modern</Link></li>
                            <li><Link to="/gallery?category=contemporary">Contemporary</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <ul className="footer-contact">
                            <li><i className="fas fa-map-marker-alt"></i> 123 Art Street, Gallery City</li>
                            <li><i className="fas fa-phone"></i> +1 234 567 890</li>
                            <li><i className="fas fa-envelope"></i> info@artgallery.com</li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Art Gallery. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 