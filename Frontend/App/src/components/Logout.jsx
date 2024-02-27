import { Box, Button, Heading, Center, Image } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Food_Eats-removebg-preview.png';
import { AppContext } from './Context';
import cookies from 'js-cookie'


const Logout = () => {
  
  const {formSubmitted, setFormSubmitted} = useContext(AppContext);
  
   const handleLogout = () => {
      setFormSubmitted(false)
      cookies.remove('token')
      cookies.remove('Name')

    };

  return (
    <Center height="100vh" id="LogoutBg">
      <Box id="LogoutBox" border="2px solid white" padding="100px">
        <Image src={Logo} width="150px"></Image>
        <Heading m="50px 0" color="white" fontSize="30px">You have successfully logged out</Heading>
        <Button as={Link} to="/" onClick={handleLogout}>Go back to home</Button>
      </Box>
    </Center>
  );
}

export default Logout;
