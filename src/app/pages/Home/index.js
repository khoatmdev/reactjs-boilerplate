import React from 'react';
import { Helmet } from 'react-helmet-async';
// import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

import { PageWrapper } from '@components/PageWrapper';

const Home = () => {
    // const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="Home Page" />
            </Helmet>
            <PageWrapper>
                <Typography variant="h1">HOME PAGE</Typography>
            </PageWrapper>
        </>
    );
};

export default Home;
