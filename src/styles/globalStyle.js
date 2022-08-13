import React from 'react';
import GlobalStylesCSS from '@mui/material/GlobalStyles';

const styles = {
    html: {
        fontSize: '62.5%',
    },
    body: {
        fontSize: '1.6rem',
    },
};

const GlobalStyles = () => {
    return <GlobalStylesCSS styles={styles} />;
};

export default GlobalStyles;
