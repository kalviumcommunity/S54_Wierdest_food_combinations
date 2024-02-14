import React from 'react';
import { Flex, Input, Link, Image, Button, Box, Heading, Text , InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Logo from '../assets/Food_Eats-removebg-preview.png';

const LandingPage = () => {
  return (
    <div>
    <div id='bodyDiv'>
      <div style={{ width: '100vw',padding:"20px"}}>
        <Flex justify="between" align="center">
          <Image src={Logo} alt="" w="36" h="32" py="2" />

          <Flex className='search'>
            <InputGroup w="96">
              <Input type="search" placeholder='Search for a category' p="5" backgroundColor="rgba(250, 250, 250)" />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm"
                children={<SearchIcon color="white.800"/>}>
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex className='options '>
            <Link href="#" px="6" fontSize="xl" fontWeight="400" color="white">Home</Link>
            <Link href="#" px="6" fontSize="xl" fontWeight="400" color="white">Categories</Link>
            <Link href="#" px="6" fontSize="xl" fontWeight="400" color="white">Combinations</Link>
            <Link href="#" px="6" fontSize="xl" fontWeight="400" color="white">Contact</Link>
            <Button backgroundColor="#FA841E" color="white" px="6" fontSize="xl" fontWeight="400" variant="solid">Login</Button>
          </Flex>
        </Flex>
      </div>
      <div style={{paddingLeft:"100px"}}>
          <Heading as="h2" size="xl" text Align="left" mt="8" width="650px"fontSize="45px"color='white' py="15">Welcome to Weird Eats!
          </Heading>
          <Text  text Align="left" mt="4" w="500px" width="650px"fontSize="23px" color='white' pt="30px" pb="45px" >
            Explore bizarre food combinations that defy expectations. Join us on a
            journey of culinary curiosity, where weird is wonderful and taste knows
            no limits. Let's indulge in the unexpected and redefine what it means
            to savor every bite. Ready to dive in? Let's get weird!
          </Text >
          <Flex justify="flex-start">
           <Button backgroundColor="#FA841E" color="white" p="6" mb="100px" fontSize="xl" fontWeight="400" w="180px" h="45px" ml="0" >Explore</Button>
          </Flex>
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
