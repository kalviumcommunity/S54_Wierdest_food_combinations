import React, { useState, useEffect } from 'react';
import { Card, CardBody, Stack, Heading, Text, Flex, Grid } from '@chakra-ui/react';

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
                <Image src={food.Image} alt={food.FoodName} style={{ borderRadius: '5px', width: '350px', height:'300px'}}></Image>
                <Heading size="md" textAlign={"center"} color="black">
                  {food.FoodName}
                </Heading>  
                  <Text size="md">{food.FoodCategory}</Text>
                  <Text fontSize="14px">{food.Region}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default Combinations;
