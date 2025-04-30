import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <h1>About Art Gallery</h1>
            <div className="about-content">
                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        Art Gallery is dedicated to bringing the world's most beautiful and significant artworks
                        to art enthusiasts everywhere. We believe in making art accessible to everyone and
                        providing a platform for art education and appreciation.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Our Collection</h2>
                    <p>
                        Our collection features masterpieces from various periods and styles, including
                        Renaissance, Impressionism, Post-Impressionism, and Modern Art. Each artwork in our
                        collection is carefully selected for its historical significance and artistic value.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Contact Us</h2>
                    <p>
                        Have questions or suggestions? We'd love to hear from you!
                        <br />
                        Email: info@artgallery.com
                        <br />
                        Phone: (123) 456-7890
                    </p>
                </section>
            </div>
        </div>
    );
}

export default About; 