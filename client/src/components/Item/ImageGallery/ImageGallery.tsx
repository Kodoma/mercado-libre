import React from 'react';
import Slider from 'react-slick';
import styles from './ImageGallery.module.css';

const ImageGallery: React.FunctionComponent<ItemsGallery> = ({
    pictures
}: ItemsGallery): JSX.Element => {
    const slides =
        pictures &&
        pictures.map((i) => {
            return <img src={i.src} />;
        });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        className: styles.carousel
    };

    return <Slider {...settings}>{slides}</Slider>;
};

export default ImageGallery;

interface ItemsGallery {
    pictures: Pictures[];
}

interface Pictures {
    src: string;
}
