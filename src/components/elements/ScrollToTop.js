import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';

const ScrollToTop = () => {
    const router = useRouter();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [router]);
    return null;
};

export default ScrollToTop