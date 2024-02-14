import React from 'react';
import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import sweet from '../assets/chocolate_momo.jpg';
import spicy from '../assets/Icecream_pani_puri.jpg';
import savoury from '../assets/Gulab_jamun_chaat.jpg';
import tangy from '../assets/jalebi_dahi.jpeg';

const Categories = () => {
  return (
    <div>
      <Box id='categoriesBg'>
        <Heading color="black" p="100px 0 70px 0">Categories</Heading>
        {/* <Text pb="50px" color="grey">Hover on the image to see the category</Text> */}
        <Flex>
          <div className="category">
            <Image src={sweet} alt="Sweet" w='300px' h='300px' borderRadius="50%" />
            <Text className="category-text" fontWeight="bold">Sweet</Text>
          </div>
          <div className="category">
            <Image src={savoury} alt="Sweet and Savoury" w='300px' h='300px' borderRadius="50%" />
            <Text className="category-text" fontWeight="bold">Sweet and Savoury</Text>
          </div>
          <div className="category">
            <Image src={spicy} alt="Sweet and Spicy" w='300px' h='300px' borderRadius="50%" />
            <Text className="category-text" fontWeight="bold">Sweet and Spicy</Text>
          </div>
          <div className="category">
            <Image src={tangy} alt="Sweet and Tangy" w='300px' h='300px' borderRadius="50%" />
            <Text className="category-text" fontWeight="bold">Sweet and Tangy</Text>
          </div>
        </Flex>
      </Box>
    </div>
  )
}

export default Categories;
