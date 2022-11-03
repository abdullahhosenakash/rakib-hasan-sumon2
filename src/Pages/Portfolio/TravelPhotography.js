import React from 'react';
import { Spinner } from 'react-bootstrap';
import usePhotos from '../../hooks/usePhotos';
import Photo from '../Photo/Photo';
import PageTitle from '../Shared/PageTitle';

const TravelPhotography = () => {
    const [photos, isLoading] = usePhotos();
    if (isLoading) {
        return <Spinner className='spinner' animation="border" />;
    }
    return (
        <div>
            <PageTitle title={'Travel Photography - RH Sumon'} />
            <div className='row row-cols-lg-4 row-cols-1 gx-0 header-margin'>
                {
                    photos.map(photo => <Photo photo={photo.img} key={photo.id} />)
                }
            </div>
        </div>
    );
};

export default TravelPhotography;