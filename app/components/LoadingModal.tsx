import React from 'react';
import styles from './LoadingModal.module.css'

interface LoadingModalProps {
    isLoading: boolean;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ isLoading }) => {
    if (!isLoading) return null; // Don't render the modal if not loading

    return (
        <div style={styles.overlay}>
            <div style={styles.spinner}></div>
        </div>
    );
};

export default LoadingModal;
