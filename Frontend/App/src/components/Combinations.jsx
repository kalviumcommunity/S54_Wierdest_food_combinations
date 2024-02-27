import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  Stack,
  Flex,
  Heading,
  Text,
  Grid,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  HStack,
  Tooltip,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import axios from 'axios';
import cookies from 'js-cookie';

const Combinations = () => {
  const [userNames, setUserNames] = useState([]);
  const [foods, setFoods] = useState([]);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [formInput, setFormInput] = useState({
    Image: '',
    FoodName: '',
    FoodCategory: '',
    Region: '',
    Created_By: '',
  });
  const [formErrors, setFormErrors] = useState({
    Image: false,
    FoodName: false,
    FoodCategory: false,
    Region: false,
  });
  const [isEditMode, setEditMode] = useState(false);
  const [editFoodId, setEditFoodId] = useState(null);
  const [selectedUserName, setSelectedUserName] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
    setFormErrors({ ...formErrors, [name]: false });

    if (name === 'FoodCategory') {
      setFormInput((prevFormInput) => ({
        ...prevFormInput,
        [name]: value.charAt(0).toUpperCase() + value.slice(1),
      }));
    }

    if (name === 'Created_By') {
      setSelectedUserName(value);
    }
  };

  const handleAddModalOpen = () => {
    setAddModalOpen(true);
  };

  const handleAddModalClose = () => {
    setAddModalOpen(false);
    setFormInput({
      Image: '',
      FoodName: '',
      FoodCategory: '',
      Region: '',
      Created_By: '',
    });
    setFormErrors({
      Image: false,
      FoodName: false,
      FoodCategory: false,
      Region: false,
    });
    setEditMode(false);
    setEditFoodId(null);
  };

  const handleEdit = (food) => {
    setFormInput({
      Image: food.Image,
      FoodName: food.FoodName,
      FoodCategory: food.FoodCategory,
      Region: food.Region,
      Created_By: food.Created_By,
    });
    setEditMode(true);
    setEditFoodId(food._id);
    setAddModalOpen(true);
  };

  const handleDelete = async (foodId) => {
    try {
      await axios.delete(`https://s54-wierdest-food-combinations.onrender.com/delete/${foodId._id}`);
      setFoods((prevFoods) => prevFoods.filter((food) => food._id !== foodId._id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleAddPost = async () => {
    const emptyFields = Object.keys(formInput).filter((key) => !formInput[key].trim());
    if (emptyFields.length > 0) {
      const errors = {};
      emptyFields.forEach((field) => {
        errors[field] = true;
      });
      setFormErrors(errors);
      return;
    }
    try {
      const createdBy = cookies.get('Name');
      const postData = {
        ...formInput,
        Created_By: createdBy
      };
      if (isEditMode) {
        await axios.put(`https://s54-wierdest-food-combinations.onrender.com/post/${editFoodId}`, postData);
        setFoods((prevFoods) =>
          prevFoods.map((food) => (food._id === editFoodId ? { ...food, ...formInput } : food))
        );
        setEditMode(false);
      } else {
        const response = await axios.post('https://s54-wierdest-food-combinations.onrender.com/post', postData);
        setFoods([...foods, response.data.createCombination]);
      }
      handleAddModalClose();
    } catch (error) {
      console.error('Error adding/editing post:', error);
    }
  };

  useEffect(() => {
    axios.get('https://s54-wierdest-food-combinations.onrender.com/userdata')
      .then(response => {
        const names = response.data.map(user => user.Name);
        setUserNames(names);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  useEffect(() => {
    const createdBy = cookies.get('Name');
    setFormInput(prevFormInput => ({ ...prevFormInput, Created_By: createdBy }));
  }, []);

  useEffect(() => {
    fetch('https://s54-wierdest-food-combinations.onrender.com/foodsData')
      .then((response) => response.json())
      .then((data) => {
        const filteredData = selectedUserName
          ? data.filter((post) => post.Created_By === selectedUserName)
          : data;
        setFoods(filteredData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [selectedUserName]);

  return (
    <div id="combinationsBg">
      <Heading p="80px 0" color="white">
        Combinations
      </Heading>
      <Tooltip label="Add Post" placement="top" fontSize="20px" backgroundColor="white" color="black">
        <Button
          onClick={handleAddModalOpen}
          position="fixed"
          bottom="8vh"
          borderRadius="50%"
          width="60px"
          height="60px"
          right="8vw"
          fontSize="2xl"
          color="white"
          backgroundColor="#FA841E"
          zIndex={999}
        >
          <AddIcon style={{ paddingTop: '5px' }} />
        </Button>
      </Tooltip>
      <Flex m="0 50px 50px 50px" justifyContent="space-between" alignItems="center">
        <Text color="white" fontSize="20px" pt="5px" fontWeight="500">Search Post By Name: </Text>
        <FormControl width="300px" margin="0 auto" backgroundColor="white" border="3px solid #FA841E" mt="4" mx="4">
          <Select
            id="userDropdown"
            name="Created_By"
            onChange={handleInputChange}
            value={formInput.Created_By || ''}
          >
            <option value="">All Users</option>
            {userNames.map((userName, index) => (
              <option key={index} value={userName}>
                {userName}
              </option>
            ))}
          </Select>
        </FormControl>
      </Flex>
      <Modal isOpen={isAddModalOpen} onClose={handleAddModalClose}>
        <ModalOverlay />
        <ModalContent margin="auto">
          <ModalHeader pt="20px">Create a Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={6} width="400px">
            <form>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="image">Image URL:</FormLabel>
                  <Input
                    type="text"
                    id="image"
                    name="Image"
                    onChange={handleInputChange}
                    value={formInput.Image}
                  />
                  {formErrors.Image && <Text color="red">Please enter the image URL</Text>}
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="foodName">Food Name:</FormLabel>
                  <Input
                    type="text"
                    id="foodName"
                    name="FoodName"
                    onChange={handleInputChange}
                    value={formInput.FoodName}
                  />
                  {formErrors.FoodName && <Text color="red">Please enter the food name</Text>}
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="category">Food Category:</FormLabel>
                  <Select
                    placeholder="Select category"
                    id="category"
                    name="FoodCategory"
                    onChange={handleInputChange}
                    value={formInput.FoodCategory}
                  >
                    <option value="Sweet">Sweet</option>
                    <option value="Sweet and Savoury">Sweet and Savoury</option>
                    <option value="Sweet and Spicy">Sweet and Spicy</option>
                    <option value="Sweet and Tangy">Sweet and Tangy</option>
                    <option value="Sweet and Creamy">Sweet and Creamy</option>
                    <option value="Sweet and Salty">Sweet and Salty</option>
                  </Select>
                  {formErrors.FoodCategory && (
                    <Text color="red">Please select the food category</Text>
                  )}
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="Region">Food Region:</FormLabel>
                  <Input
                    type="text"
                    id="Region"
                    name="Region"
                    onChange={handleInputChange}
                    value={formInput.Region}
                  />
                  {formErrors.Region && <Text color="red">Please enter the food region</Text>}
                </FormControl>
              </VStack>
              <HStack mt="30px" align="center" justifyContent="center">
                <Button m="0 10px" colorScheme="blue" onClick={handleAddPost}>
                  Post
                </Button>
                <Button m="0 10px" onClick={handleAddModalClose}>
                  Cancel
                </Button>
              </HStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      {foods.length > 0 ? (
        <>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {foods.map((food) => (
              <Card key={food._id} width={'400px'} mb={30} id="combinationCard">
                <CardBody>
                  <Stack mt="5" spacing="3">
                    <img
                      src={food.Image}
                      alt={food.FoodName}
                      style={{ borderRadius: '5px', width: '350px', height: '300px' }}
                    />
                    <Heading size="md" textAlign={'center'} color="red">
                      {food.FoodName}
                    </Heading>
                    <hr />
                    <Text size="md">Category: {food.FoodCategory}</Text>
                    <Text fontSize="14px">Region: {food.Region}</Text>
                    <HStack justifyContent="space-between">
                      <Button colorScheme="blue" onClick={() => handleEdit(food)}>
                        Edit
                      </Button>
                      <Button colorScheme="red" onClick={() => handleDelete(food)}>
                        Delete
                      </Button>
                    </HStack>
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </>
      ) : (
        <Text color="white" height="80vh" fontSize="30px">
          Ohh no, combination is empty
        </Text>
      )}
    </div>
  );
};

export default Combinations;
