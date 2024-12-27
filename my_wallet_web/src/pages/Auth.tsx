import React, { Suspense } from 'react'
import { LOCAL_STORAGE_KEYS } from '../utils/constants/local-storage-key'
import { Navigate, useLocation } from 'react-router-dom';
import { LoadingSpinner } from '../components/LoadingSpinner';
import RootPage from './RootPage';

export default function Auth() {
    
    const location = useLocation();

    const storedToken = localStorage.getItem(
        LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY
    );
    
    return storedToken ? (
        <Suspense fallback={<LoadingSpinner />}>
            <RootPage />
        </Suspense>
    ) 
    :
    (
        <Navigate to="/login" state={{ from: location }} replace />
    )

}
