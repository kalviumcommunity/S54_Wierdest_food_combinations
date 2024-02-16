import React, { useState, useEffect } from 'react';
import { Card, CardBody, Stack, Heading, Text, Flex, Grid, Box } from '@chakra-ui/react';

const Combinations = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('https://s54-wierdest-food-combinations.onrender.com/foodsData')
      .then(response => response.json())
      .then(data => {
        setFoods(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div id="combinationsBg">
      <Heading p="80px 0" color="white">Combinations</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {foods.map(food => (
          <Card key={food.FoodId} width={"400px"} mb={30} id="combinationCard">
            <CardBody>
              <Stack mt="5" spacing="3">
                <img src={food.Image} alt={food.FoodName} style={{ borderRadius: '5px', width: '350px', height:'300px'}}/>
                <Heading size="md" textAlign={"center"} color="red">
                  {food.FoodName}
                </Heading>  
                <hr/>
                  <Text size="md" fontWeight="500">Category: {food.FoodCategory}</Text>
                  <Text fontSize="14px" fontWeight="500">Region: {food.Region}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default Combinations;
