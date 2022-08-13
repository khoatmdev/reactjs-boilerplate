import React from 'react';
import { Helmet } from 'react-helmet-async';

import { PageWrapper } from '@components/PageWrapper';
import Posts from './Posts';

const Example = () => {
    return (
        <>
            <Helmet>
                <title>Example Page</title>
                <meta name="description" content="Example Page" />
            </Helmet>

            <PageWrapper>
                <Posts />
            </PageWrapper>
        </>
    );
};

export default Example;
