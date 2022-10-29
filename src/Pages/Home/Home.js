import React from 'react';
import usePhotos from '../../hooks/usePhotos';
import Photo from '../Photo/Photo';

const Home = () => {
    const [photos] = usePhotos();
    console.log(photos)
    return (
        <div className='row row-cols-lg-4 row-cols-sm-1 gx-0'>
            {
                photos.map(photo => <Photo photo={photo.img} alt='' />)
            }
        </div>
    );
};

export default Home;