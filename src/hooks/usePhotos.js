import { useEffect, useState } from 'react';

const usePhotos = () => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('images.json')
            .then(res => res.json())
            .then(data => setPhotos(data))
            .then(() => setIsLoading(false));
    }, []);
    return [photos, isLoading];
};

export default usePhotos;