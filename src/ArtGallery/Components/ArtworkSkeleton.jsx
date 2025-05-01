import React from 'react';
import './ArtworkSkeleton.css';

function ArtworkSkeleton() {
    return (
        <div className="artwork-skeleton">
            <div className="skeleton-image"></div>
            <div className="skeleton-info">
                <div className="skeleton-title"></div>
                <div className="skeleton-artist"></div>
            </div>
        </div>
    );
}

export default ArtworkSkeleton; 