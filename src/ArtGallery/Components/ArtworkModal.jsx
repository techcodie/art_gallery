import React from 'react';
import './ArtworkModal.css';

function ArtworkModal({ artwork, onClose }) {
    if (!artwork) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                <div className="modal-image-container">
                    <img src={artwork.image} alt={artwork.title} className="modal-image" />
                </div>
                <div className="modal-info">
                    <h2>{artwork.title}</h2>
                    <p className="artist">{artwork.artist}</p>
                    <p className="year">{artwork.year}</p>
                    <p className="category">{artwork.category}</p>
                    <p className="description">{artwork.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ArtworkModal; 