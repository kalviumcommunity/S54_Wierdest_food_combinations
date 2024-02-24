// LandingPage.jsx
import React from 'react';
import Categories from './Categories';
import Combinations from './Combinations';
import {
  Button,
  Flex,
  Text,
  Heading,
} from '@chakra-ui/react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const LandingPage = ({ formSubmitted }) => {
  return (
    <div id='bodyDiv'>
      <Navbar/>
      <div style={{ paddingLeft: "100px" }}>
        <Heading as="h2" size="xl" textAlign="left" mt="8" width="650px" fontSize="45px" color='white' py="15">Welcome to Weird Eats!</Heading>
        <Text textAlign="left" mt="4" w="500px" width="650px" fontSize="23px" color='white' pt="30px" pb="45px">
          Explore bizarre food combinations that defy expectations. Join us on a
          journey of culinary curiosity, where weird is wonderful and taste knows
          no limits. Let's indulge in the unexpected and redefine what it means
          to savor every bite. Ready to dive in? Let's get weird!
        </Text>
        {!formSubmitted && (
        <Flex justify="flex-start">
          <Button as={Link} to="/login" backgroundColor="#FA841E" color="white" p="6" mb="100px" fontSize="xl" fontWeight="400" w="180px" h="45px" ml="0">Explore</Button>
        </Flex>)}
        {formSubmitted && (
        <Flex justify="flex-start">
          <Button as={Link} to="#categories" backgroundColor="#FA841E" color="white" p="6" mb="100px" fontSize="xl" fontWeight="400" w="180px" h="45px" ml="0">Explore</Button>
        </Flex>
        )}
      </div>
      {formSubmitted && (
        <>
          <Categories />
          <Combinations />
        </>
      )}
    </div>
  );
};

export default LandingPage;
