import React from 'react';
import '../Styles/ArtworkModal.css';

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
                    <p className="artist-name">{artwork.artist}</p>
                    <p className="artwork-year">{artwork.year}</p>
                    <p className="artwork-category">{artwork.category}</p>
                    <p className="artwork-description">{artwork.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ArtworkModal; 