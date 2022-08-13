import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import App from './app';
import store from './store/store';
import './locales/i18n';
import { theme } from './styles/theme';
import GlobalStyles from '@/styles/globalStyle';

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <HelmetProvider>
            <React.StrictMode>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <App />
                </ThemeProvider>
            </React.StrictMode>
        </HelmetProvider>
    </Provider>,
);
