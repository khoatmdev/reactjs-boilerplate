import React from 'react';
import { CircularProgress } from '@mui/material';

export const LoadingSpinner = props => {
    return (
        <CircularProgress
            sx={{ animationDuration: '1000ms' }}
            color="inherit"
            {...props}
        />
    );
};
