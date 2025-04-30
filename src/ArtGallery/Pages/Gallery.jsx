import React, { useState } from 'react';
import ArtworkModal from '../Components/ArtworkModal';
import './Gallery.css';

function Gallery({ artworks }) {
    const [selectedArtwork, setSelectedArtwork] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [filter, setFilter] = useState('all');
    const [imageErrors, setImageErrors] = useState({});

    const categories = ['all', ...new Set(artworks.map(artwork => artwork.category))];

    const filteredArtworks = filter === 'all'
        ? artworks
        : artworks.filter(artwork => artwork.category === filter);

    const toggleFavorite = (artworkId) => {
        setFavorites(prev =>
            prev.includes(artworkId)
                ? prev.filter(id => id !== artworkId)
                : [...prev, artworkId]
        );
    };

    const handleImageError = (artworkId) => {
        setImageErrors(prev => ({
            ...prev,
            [artworkId]: true
        }));
    };

    return (
        <div className="gallery-container">
            <div className="filter-container">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`filter-button ${filter === category ? 'active' : ''}`}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="artworks-grid">
                {filteredArtworks.map(artwork => (
                    <div key={artwork.id} className="artwork-card">
                        <div className="artwork-image-container" onClick={() => setSelectedArtwork(artwork)}>
                            {imageErrors[artwork.id] ? (
                                <div className="image-error">
                                    <span>Image not available</span>
                                </div>
                            ) : (
                                <img
                                    src={artwork.image}
                                    alt={artwork.title}
                                    className="artwork-image"
                                    loading="lazy"
                                    onError={() => handleImageError(artwork.id)}
                                />
                            )}
                            <div className="artwork-overlay">
                                <span className="view-details">View Details</span>
                            </div>
                        </div>
                        <div className="artwork-info">
                            <h2>{artwork.title}</h2>
                            <p className="artist">{artwork.artist}</p>
                            <button
                                className={`favorite-button ${favorites.includes(artwork.id) ? 'active' : ''}`}
                                onClick={() => toggleFavorite(artwork.id)}
                            >
                                {favorites.includes(artwork.id) ? '❤️' : '🤍'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedArtwork && (
                <ArtworkModal
                    artwork={selectedArtwork}
                    onClose={() => setSelectedArtwork(null)}
                />
            )}
        </div>
    );
}

export default Gallery; 