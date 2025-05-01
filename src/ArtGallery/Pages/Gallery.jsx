import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArtworkModal from '../Components/ArtworkModal';
import SearchBar from '../Components/SearchBar';
import './Gallery.css';

function Gallery({ artworks }) {
    const [selectedArtwork, setSelectedArtwork] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [imageErrors, setImageErrors] = useState({});

    useEffect(() => {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const categories = ['all', ...new Set(artworks.map(artwork => artwork.category))];

    const filteredArtworks = artworks.filter(artwork => {
        const matchesFilter = filter === 'all' || artwork.category === filter;
        const matchesSearch = artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            artwork.artist.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

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
        <div className={`gallery-container ${isDarkMode ? 'dark' : ''}`}>
            <h1>Art Gallery</h1>

            <SearchBar
                onSearch={setSearchQuery}
                onThemeToggle={toggleTheme}
                isDarkMode={isDarkMode}
            />

            <div className="filter-container">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`filter-button ${filter === category ? 'active' : ''}`}
                        onClick={() => setFilter(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            <div className="artworks-grid">
                {filteredArtworks.map(artwork => (
                    <div
                        key={artwork.id}
                        className="artwork-card"
                        onClick={() => setSelectedArtwork(artwork)}
                    >
                        <div className="artwork-image-container">
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
                        </div>
                        <div className="artwork-info">
                            <h3 className="artwork-title">{artwork.title}</h3>
                            <p className="artist-name">{artwork.artist}</p>
                        </div>
                        <button
                            className={`favorite-button ${favorites.includes(artwork.id) ? 'active' : ''}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(artwork.id);
                            }}
                        >
                            <i className="fas fa-heart"></i>
                        </button>
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