import React from 'react';
import './LoadingModal.css'

interface LoadingModalProps {
    isLoading: boolean;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ isLoading }) => {
    if (!isLoading) return null; // Don't render the modal if not loading

    return (
        <div className="overlay">
            <div className="spinner"></div>
        </div>
    );
};

export default LoadingModal;
