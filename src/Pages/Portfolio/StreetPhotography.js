import React from 'react';
import { Spinner } from 'react-bootstrap';
import usePhotos from '../../hooks/usePhotos';
import Photo from '../Photo/Photo';
import PageTitle from '../Shared/PageTitle';


const StreetPhotography = () => {
    const [photos, isLoading] = usePhotos();
    if (isLoading) {
        return <Spinner className='spinner' animation="border" />;
    }
    let streetPhotos = [];
    if (photos.length) {
        streetPhotos = [photos[photos.length - 1]];
        for (let i = photos.length - 1; i > 0; i--) {
            streetPhotos = [...streetPhotos, photos[i - 1]];
        }
    }
    return (
        <div>
            <PageTitle title={'Street Photography - RH Sumon'} />
            <div className='row row-cols-lg-4 row-cols-1 gx-0 header-margin'>
                {
                    streetPhotos.map(photo => <Photo photo={photo.img} key={photo.id} />)
                }
            </div>
        </div>
    );
};

export default StreetPhotography;