import React from 'react';
import { Button, useDisclosure, FormControl, FormLabel, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, VStack } from '@chakra-ui/react';

function ManualClose() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="image">Image URL:</FormLabel>
                  <Input type="text" id="image" name="image" w={96}/>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="foodname">Food Name:</FormLabel>
                  <Input type="text" id="foodname" name="foodname" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="category">Food Category:</FormLabel>
                  <Input type="text" id="category" name="category" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="region">Food Region:</FormLabel>
                  <Input type="text" id="region" name="region" />
                </FormControl>
              </VStack>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ManualClose;
