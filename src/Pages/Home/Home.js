import React from 'react';
import usePhotos from '../../hooks/usePhotos';
import Photo from '../Photo/Photo';
import PageTitle from '../Shared/PageTitle';

const Home = () => {
    const [photos] = usePhotos();
    console.log(photos)
    return (
        <div className='row row-cols-lg-4 row-cols-1 gx-0 header-margin'>
            <PageTitle title={'Rakib Hasan Sumon'} />
            {
                photos.map(photo => <Photo key={photo.id} photo={photo.img} alt='' />)
            }
        </div>
    );
};

export default Home;