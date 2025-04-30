import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const featuredArtworks = [
        {
            id: 1,
            title: "The Starry Night",
            artist: "Vincent van Gogh",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
            description: "A masterpiece of post-impressionism, depicting the view from van Gogh's asylum room."
        },
        {
            id: 2,
            title: "Mona Lisa",
            artist: "Leonardo da Vinci",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
            description: "The most famous portrait in the world, known for its enigmatic smile."
        },
        {
            id: 3,
            title: "The Persistence of Memory",
            artist: "Salvador Dalí",
            image: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
            description: "A surrealist masterpiece featuring melting clocks in a dreamlike landscape."
        }
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % featuredArtworks.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`home-container ${isVisible ? 'visible' : ''}`}>
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to the Art Gallery</h1>
                    <p>Discover the world's most beautiful masterpieces</p>
                    <Link to="/gallery" className="explore-button">
                        Explore Artworks
                    </Link>
                </div>
            </section>

            <section className="featured-section">
                <h2>Featured Masterpieces</h2>
                <div className="slideshow-container">
                    {featuredArtworks.map((artwork, index) => (
                        <div
                            key={artwork.id}
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${artwork.image})` }}
                        >
                            <div className="slide-content">
                                <h3>{artwork.title}</h3>
                                <p className="artist">{artwork.artist}</p>
                                <p className="description">{artwork.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className="slide-controls">
                        {featuredArtworks.map((_, index) => (
                            <button
                                key={index}
                                className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="categories-section">
                <h2>Explore by Category</h2>
                <div className="categories-grid">
                    <Link to="/gallery?category=renaissance" className="category-card">
                        <div className="category-icon">🎨</div>
                        <h3>Renaissance</h3>
                        <p>Classical masterpieces from the 14th-17th centuries</p>
                    </Link>
                    <Link to="/gallery?category=impressionism" className="category-card">
                        <div className="category-icon">🌅</div>
                        <h3>Impressionism</h3>
                        <p>Light and color in modern art</p>
                    </Link>
                    <Link to="/gallery?category=modern" className="category-card">
                        <div className="category-icon">🖼️</div>
                        <h3>Modern Art</h3>
                        <p>Contemporary artistic expressions</p>
                    </Link>
                </div>
            </section>

            <section className="cta-section">
                <h2>Start Your Artistic Journey</h2>
                <p>Join our community of art enthusiasts</p>
                <div className="cta-buttons">
                    <Link to="/gallery" className="cta-button primary">
                        Browse Gallery
                    </Link>
                    <Link to="/artists" className="cta-button secondary">
                        Meet Artists
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home; 