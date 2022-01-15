import React, { useState } from 'react';
import LoadingAnimation from '../components/common/LoadingAnimation';
import { LoadingContext } from './LoadingContext';

function LoadingProvider({ children }) {

    const [isLoading, setIsLoading] = useState(false)

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {isLoading && <LoadingAnimation />}
            {children}
        </LoadingContext.Provider>
    );
}

export default LoadingProvider;