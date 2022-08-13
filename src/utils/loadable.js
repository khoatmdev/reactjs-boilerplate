import { LinearProgress } from '@mui/material';
import React, { lazy, Suspense } from 'react';

const loadable = (importFunc, { fallback = null } = { fallback: null }) => {
    const LazyComponent = lazy(importFunc);

    return props => (
        <Suspense fallback={fallback ?? <LinearProgress color="inherit" />}>
            <LazyComponent {...props} />
        </Suspense>
    );
};

export default loadable;
