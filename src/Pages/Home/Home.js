import React from 'react';
import usePhotos from '../../hooks/usePhotos';
import Photo from '../Photo/Photo';

const Home = () => {
    const [photos] = usePhotos();
    console.log(photos)
    return (
        <div className='row row-cols-lg-4 row-cols-1 gx-0 header-margin'>
            {
                photos.map(photo => <Photo key={photo.id} photo={photo.img} alt='' />)
            }
        </div>
    );
};

export default Home;