import React, { useContext } from 'react';
import { Flex, Button, Image } from '@chakra-ui/react';
import Logo from '../assets/Food_Eats-removebg-preview.png';
import { Link } from 'react-router-dom';
import { AppContext } from './Context';

const Navbar = () => {

  const {formSubmitted, setFormSubmitted} = useContext(AppContext);
  return (
    <div style={{ width: '100vw', padding: '20px' }}>
      <Flex justify="between" align="center">
        <Link to="/">
          <Image src={Logo} alt="" w="36" h="32" py="2" />
        </Link>
        <Flex className='options'>
          <Button as={Link} to="/" px="6" fontSize="xl" fontWeight="500" color="white" backgroundColor="transparent" _hover={{ backgroundColor: 'transparent', color: 'blue.500' }}>Home</Button>
          <Button as={Link} to="/categories" px="6" fontSize="xl" fontWeight="500" color="white" backgroundColor="transparent" _hover={{ backgroundColor: 'transparent', color: 'blue.500' }}>Categories</Button>
          <Button as={Link} to="/combinations" px="6" fontSize="xl" fontWeight="500" color="white" backgroundColor="transparent" _hover={{ backgroundColor: 'transparent', color: 'blue.500' }}>Combinations</Button>
        </Flex>
        <Flex>
        {formSubmitted ? (
            <Button as={Link} to="/logout" backgroundColor="#FA841E" color="white" px="6" fontSize="xl" fontWeight="400" variant="solid">Logout</Button>
          ) : (
            <Button as={Link} to="/login" backgroundColor="#FA841E" color="white" px="6" fontSize="xl" fontWeight="400" variant="solid">Login</Button>
          )}
        </Flex>
      </Flex>
    </div>
  );
}

export default Navbar;
