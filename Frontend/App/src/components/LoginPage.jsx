import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Image,
  Text,
  Heading,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AppContext } from './Context';

const Login = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitted },
  } = useForm();
  
  const {isLoggedIn, setIsLoggedIn}=useContext(AppContext);
  const {formSubmitted, setFormSubmitted} = useContext(AppContext);
  
  
  const setCookie = (name, value, daysToExpire) => {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  };
  
  useEffect(()=>{
    console.log(formSubmitted)
  },[])
  
  
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/auth', {
        username: data.username,
        password: data.password,
      });
      setIsLoggedIn(true);
      setFormSubmitted(true);
      setCookie('username', data.username, 30);

    if (response.status === 200) {
      alert('You have successfully submitted your form');
      setIsLoggedIn(true);
      setFormSubmitted(true);
      setCookie('username', data.username, 30);
    } else {
      console.error('Authentication failed');
    }
  } catch (error) {
    console.error('Error submitting form:', error.message);
  }
};

  return (
    <Box id='LoginBg'>
      <Flex align="center" justify="between" h="100vh">
       <Image src="https://www.shutterstock.com/image-photo/food-elegant-expensive-dish-plate-600nw-2233658647.jpg" height="100vh" width="70vw"/>
        <Box rounded="md" w="50vw" p="0 100px">
          <Heading fontWeight="500" fontSize="40px" pb="20px">SIGN UP</Heading>
          <Text pb="30px">Fill out this form</Text>
          {formSubmitted ? (
            <Button as={Link} to="/" backgroundColor="rgb(168, 41, 43)" color="white" width="full">
              Go back to Home
            </Button>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
              <VStack spacing={4} align="flex-start">
                <FormControl isInvalid={errors.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input {...register("name")} type="text" variant="filled" />
                  <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.username}>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input {...register("username")} type="text" variant="filled" />
                  <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input {...register("email")} type="email" variant="filled" />
                  <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    {...register("password", {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must contain at least 6 characters',
                      },
                    })}
                    type="password"
                    variant="filled"
                    autoComplete='off'
                  />
                  <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                </FormControl>
                <Button type="submit" backgroundColor="rgb(168, 41, 43)" color="white" width="full">
                  Create Account
                </Button>
                {isSubmitted &&
                  (errors.name || errors.username || errors.email || errors.password) && (
                    <Box color="red.500">Please fill in all fields.</Box>
                  )}
                <Button type="reset" colorScheme="gray" width="full">
                  Reset
                </Button>
              </VStack>
            </form>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;