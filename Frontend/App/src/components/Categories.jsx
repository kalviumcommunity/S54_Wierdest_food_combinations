import React, { useRef } from 'react';
import { Box, Text,Heading, Flex, IconButton } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sweet from '../assets/chocolate_momo.jpg';
import spicy from '../assets/Icecream_pani_puri.jpg';
import savoury from '../assets/Gulab_jamun_chaat.jpg';
import tangy from '../assets/jalebi_dahi.jpeg';
import salty from '../assets/Salty.jpeg';
import creamy from '../assets/Creamy.webp';

const Categories = () => {
  const images = [
    { src: sweet, name: 'Sweet' },
    { src: savoury, name: 'Sweet and Savoury' },
    { src: spicy, name: 'Sweet and Spicy' },
    { src: tangy, name: 'Sweet and Tangy' },
    { src: creamy, name: 'Sweet and Creamy' },
    { src: salty, name: 'Sweet and Salty' }
  ];
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    accessibility: true,
    
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div style={{ position: 'relative' }}>
      <Box id='categoriesBg'>
        <Heading color="white" p="100px 0 10px 0">Categories</Heading>
        <Text p="10px 0 50px 0" color="grey">Hover on the image to see the category name</Text>
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} className="category" style={{ border: '1px solid black', borderRadius: '10px', padding: '10px' }}>
              <img id="categoriesImg"src={image.src} alt={image.name} style={{ width: '380px', height: '350px', borderRadius: '50%', margin: 'auto' }} />
              <Flex justifyContent="center">
                <Box as="span" className="category-text" fontWeight="bold">{image.name}</Box>
              </Flex>
            </div>
          ))}
        </Slider>
        <IconButton
          icon={<FaChevronLeft />}
          style={{ position: 'absolute', top: '50%', left: '10px'  }}
          onClick={goToPrevSlide}
        />
        <IconButton
          icon={<FaChevronRight />}
          style={{ position: 'absolute', top: '50%', right: '10px' }}
          onClick={goToNextSlide}
        />
      </Box>
    </div>
  );
}

export default Categories;