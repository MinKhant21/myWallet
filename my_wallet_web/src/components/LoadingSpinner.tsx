import React from 'react';
import '../assets/styles/spinner.css';

export const LoadingSpinner: React.FC = () => {
    return (
        <div id="overlay">
            <div className="spinner"></div>
        </div>
    );
};
