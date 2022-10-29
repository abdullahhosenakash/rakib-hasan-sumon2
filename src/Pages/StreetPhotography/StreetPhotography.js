import React from 'react';
import usePhotos from '../../hooks/usePhotos';
import Photo from '../Photo/Photo';

const StreetPhotography = () => {
    const [photos] = usePhotos();
    let streetPhotos = [];
    if (photos.length) {
        streetPhotos = [photos[photos.length - 1]];
        for (let i = photos.length - 1; i > 0; i--) {
            streetPhotos = [...streetPhotos, photos[i - 1]];
        }
    }
    return (
        <div className='row row-cols-lg-4 row-cols-1 gx-0 header-margin'>
            {
                streetPhotos.map(photo => <Photo photo={photo.img} key={photo.id} />)
            }
        </div>
    );
};

export default StreetPhotography;