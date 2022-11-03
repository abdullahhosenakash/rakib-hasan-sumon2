import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title = 'Rakib Hasan Sumon' }) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

export default PageTitle;