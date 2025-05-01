import React, { useState, useEffect } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, onThemeToggle, isDarkMode }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <div className={`search-container ${isDarkMode ? 'dark' : ''}`}>
            <div className="search-wrapper">
                <input
                    type="text"
                    placeholder="Search artworks..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="search-input"
                />
                <button className="search-button">
                    <i className="fas fa-search"></i>
                </button>
            </div>
            <button
                className="theme-toggle"
                onClick={onThemeToggle}
                aria-label="Toggle dark mode"
            >
                {isDarkMode ? (
                    <i className="fas fa-sun"></i>
                ) : (
                    <i className="fas fa-moon"></i>
                )}
            </button>
        </div>
    );
}

export default SearchBar; 