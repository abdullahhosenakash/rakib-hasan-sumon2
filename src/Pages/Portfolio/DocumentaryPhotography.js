import React from 'react';
import { Spinner } from 'react-bootstrap';
import usePhotos from '../../hooks/usePhotos';
import Photo from '../Photo/Photo';
import PageTitle from '../Shared/PageTitle';

const DocumentaryPhotography = () => {
    const [photos, isLoading] = usePhotos();
    if (isLoading) {
        return <Spinner className='spinner' animation="border" />;
    }
    let documentaryPhotos = [];
    if (photos.length) {
        documentaryPhotos = [photos[photos.length - 2]];
        for (let i = 0; i < photos.length; i += 2) {
            documentaryPhotos = [...documentaryPhotos, photos[i]];
        }
        for (let i = 1; i < photos.length; i += 2) {
            if (i === 19) {
                continue;
            }
            documentaryPhotos = [...documentaryPhotos, photos[i]];
        }
    }
    return (
        <div>
            <PageTitle title={'Documentary Photography - RH Sumon'} />
            <div className='row row-cols-lg-4 row-cols-1 gx-0 header-margin'>
                {
                    documentaryPhotos.map(photo => <Photo photo={photo.img} key={photo.id} />)
                }
            </div>
        </div>
    );
};

export default DocumentaryPhotography;