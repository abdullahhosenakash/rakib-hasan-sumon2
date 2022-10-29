import React from 'react';
import './Photo.css';

const Photo = ({ photo }) => {
    return (
        <div className='col p-0'>
            <img className='image' src={photo} alt="" />
        </div>
    );
};

export default Photo;