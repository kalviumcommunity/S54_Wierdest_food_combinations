import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
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
import cookies from 'js-cookie'

const SignUp = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitted },
  } = useForm();

  const [data,setData]=useState({
    Name:'',
    Username:'',
    Email_id:'',
    Password:''
  })

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  const { formSubmitted, setFormSubmitted } = useContext(AppContext);

  
  const postUserData = async () => {
    try {
      const response = await axios.post('https://s54-wierdest-food-combinations.onrender.com/auth', data);const token = response.data.token;
      cookies.set('token', token, { expires: 30 }); 
    } catch (error) {
      console.error('Error posting user data:', error);
    }
  };
  

  
  const onSubmit = async () => {
    try {
      setIsLoggedIn(true);
      setFormSubmitted(true);
      await postUserData(data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }

  };
  useEffect(() => {
    console.log(formSubmitted);
  }, [formSubmitted]);

  return (
    <Box id='SignUpBg'>
      <Flex align="center" justify="between" h="100vh">
        <Box rounded="md" w="50vw" p="0 100px">
          {formSubmitted ? (
            <Box>
              <Heading mb="20px" fontWeight="500" fontSize="40px" pb="20px">You have Successfully Created your Account</Heading>
              <Button as={Link} to="/" backgroundColor="rgb(168, 41, 43)" color="white" width="full">
                Go back to Home
              </Button>
            </Box>
          ) : (
            <Box>
              <Heading fontWeight="500" fontSize="40px" pb="20px">SignUp</Heading>
              <Text pb="30px">Fill out this form</Text>
              <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
                <VStack spacing={4} align="flex-start">
                  <FormControl isInvalid={errors.Name}>
                    <FormLabel htmlFor="Name">Name</FormLabel>
                    <Input {...register("Name", { required: 'Name is required' })} type="text" onChange={handleInput} value={data.Name} variant="filled" />
                    <FormErrorMessage>{errors.Name && errors.Name.message}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.Username}>
                    <FormLabel htmlFor="Username">Username</FormLabel>
                    <Input {...register("Username", { required: 'Username is required' })} type="text" onChange={handleInput} value={data.Username} variant="filled" />
                    <FormErrorMessage>{errors.Username && errors.Username.message}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.Email_id}>
                    <FormLabel htmlFor="Email_id">Email Id</FormLabel>
                    <Input {...register("Email_id", { required: 'Email id is required' })} type="email"  onChange={handleInput} value={data.Email_id}variant="filled" />
                    <FormErrorMessage>{errors.Email_id && errors.Email_id.message}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.Password}>
                    <FormLabel htmlFor="Password">Password</FormLabel>
                    <Input
                      {...register("Password", {
                        required: 'Password is required',
                        minLength: {
                          value: 6,
                          message: 'Password must contain at least 6 characters',
                        },
                      })}
                      type="password"
                      onChange={handleInput} 
                      value={data.Password}
                      variant="filled"
                      autoComplete='off'
                    />
                    <FormErrorMessage>{errors.Password && errors.Password.message}</FormErrorMessage>
                  </FormControl>
                  <Button type="submit" backgroundColor="rgb(168, 41, 43)" color="white" width="full">
                    Sign Up
                  </Button>
                  {isSubmitted &&
                    (errors.Name || errors.Username || errors.Email_id || errors.Password) && (
                      <Box color="red.500">Please fill in all fields.</Box>
                      )}
                  <Button type="reset" colorScheme="gray" width="full">
                    Reset
                  </Button>
                </VStack>
              </form>
            </Box>
          )}
        </Box>
        <Image
          src="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg"
          height="100vh"
          width="60vw"
        />
      </Flex>
    </Box>
  );
};

export default SignUp;
