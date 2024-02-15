import React, { useState, useEffect } from 'react';
import { Card, CardBody, Stack, Heading, Text, Flex, Grid, Image } from '@chakra-ui/react';

const Combinations = () => {
  const [foodsData, setFoodsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://s54-wierdest-food-combinations.onrender.com/foodsData')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setFoodsData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div id="combinations">
      <Heading p="80px 0" color="white">Combinations</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {foodsData.map((food, index) => (
          <Card key={index} maxW="sm" width={"310px"} mb={30}>
            <CardBody>
              <Image src={food.Image} alt={food.FoodName} borderRadius="lg" width={"270px"} />
              <Stack mt="5" spacing="3">
                <Heading size="md" textAlign={"center"} color="red">
                  {food.FoodName}
                </Heading>
                <Flex justifyContent={"space-between"} color="red">
                  <Text size="md">{food.FoodCategory}</Text>
                  <Text fontSize="14px">{food.Region}</Text>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default Combinations;
