import React from 'react';
import PageTitle from './PageTitle';

const NotFound = () => {
    return (
        <div>
            <PageTitle title={'Page Not Found - RH Sumon'} />
            <h2 className="display-6 text-danger text-center header-margin pt-5">Page Not Found</h2>
        </div>
    );
};

export default NotFound;