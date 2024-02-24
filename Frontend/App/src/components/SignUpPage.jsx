import React from 'react';
import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Link
} from "@chakra-ui/react";

const SignUpPage = () => {
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={96}>
        <Formik
          initialValues={{
            name: "",
            username: "",
            email: "",
            password: ""
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
          onReset={(values, { resetForm }) => {
            resetForm();
          }}
        >
          {({ handleSubmit, handleReset, errors, touched }) => (
            <form onSubmit={handleSubmit} onReset={handleReset}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Field
                    as={Input}
                    id="username"
                    name="username"
                    type="text"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length < 6) {
                        error = "Password must contain at least 6 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Link color="blue.500" alignSelf="flex-end" mb={2} href="/forgot-password">
                  Forgot Password?
                </Link>
                <Button type="submit" colorScheme="purple" width="full">
                  Login
                </Button>
                <Button type="reset" colorScheme="gray" width="full">
                  Reset
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}

export default SignUpPage;
