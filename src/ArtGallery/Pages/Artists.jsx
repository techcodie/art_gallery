import React from 'react';
import './Artists.css';

function Artists({ artworks }) {
    const artists = [...new Set(artworks.map(artwork => artwork.artist))];

    return (
        <div className="artists-container">
            <h1>Artists</h1>
            <div className="artists-grid">
                {artists.map((artist, index) => {
                    const artistArtworks = artworks.filter(artwork => artwork.artist === artist);
                    return (
                        <div key={index} className="artist-card">
                            <h2>{artist}</h2>
                            <div className="artist-artworks">
                                {artistArtworks.map(artwork => (
                                    <div key={artwork.id} className="artist-artwork">
                                        <img src={artwork.image} alt={artwork.title} />
                                        <h3>{artwork.title}</h3>
                                        <p>{artwork.year}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Artists; 