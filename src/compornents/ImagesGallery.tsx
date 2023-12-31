import React from 'react';
import './ImagesGallery.css';
import Image from '../type';

type Props = {
    fetchData:Image[];
    currentImagesGallery:Image[];
}

function ImagesGallery(props:Props) {
    const { currentImagesGallery } = props;

  return (
    <div>
        <div className='images-wrapper'>
            {currentImagesGallery.map((data) => (
                <div className='image' key={data.id}>
                    <img 
                        src= {data.largeImageURL}
                        alt="pixabay images"
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ImagesGallery