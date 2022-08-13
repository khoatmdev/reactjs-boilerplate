import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';

const LinkBehavior = React.forwardRef((props, ref) => {
    const { href, ...other } = props;
    return <RouterLink ref={ref} to={href} {...other} />;
});

export const theme = createTheme({
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
            },
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior,
            },
        },
    },
});
