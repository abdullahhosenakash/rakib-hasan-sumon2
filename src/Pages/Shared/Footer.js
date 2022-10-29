import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='text-center my-2'>
            © {year} by Rakib Hasan Sumon - Bangladeshi Photographer
        </div>
    );
};

export default Footer;