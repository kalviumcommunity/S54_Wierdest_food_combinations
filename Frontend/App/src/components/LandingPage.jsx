import React from 'react';
import { Flex, Input, Link, Image, Button, Box } from '@chakra-ui/react';
import Logo from '../assets/Food_Eats-removebg-preview.png';

const LandingPage = () => {
  return (
    <div style={{ width: '100vw', padding: "20px 0" }}>
      <Flex justify="between" align="center">
        <Image src={Logo} alt="" w="36" h="32" py="2" />

        <Flex className='search'>
          <Input type="search" placeholder='Search for a category' w="96" p="5" />
        </Flex>

        <Flex className='options'>
          <Link href="#" px="6" fontSize="xl" fontWeight="400">Home</Link>
          <Link href="#" px="6" fontSize="xl" fontWeight="400">Categories</Link>
          <Link href="#" px="6" fontSize="xl" fontWeight="400">Contact</Link>
          <Button backgroundColor="#FE8618" color="white" px="6" fontSize="xl" fontWeight="400" variant="solid">Login</Button>
        </Flex>
      </Flex>
      <hr style={{ boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)" }} />
    </div>
  );
};

export default LandingPage;
