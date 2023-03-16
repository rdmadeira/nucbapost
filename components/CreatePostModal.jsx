import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from 'react-query'; // useQueryClient trae un metodo invalidateQuery, que invalida el query y forza el re-fetch. Vamos a usar eso en el caso de success.
import React from 'react';

const CreatePostModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const queryClient = useQueryClient();
  const toast = useToast();

  const createPost = useMutation(
    (post) => {
      return fetch(
        `${process.env.PROTOCOL}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/post`,
        {
          method: 'POST',
          body: JSON.stringify(post),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    },
    {
      onSuccess: () => {
        onClose();
        queryClient.invalidateQueries('posts');
        toast({
          title: 'Post creado ',
          status: 'success',
          duration: 1000,
          isClosable: true,
          position: 'top',
        });
      },
    }
  );

  const handleSubmit = () => {
    createPost.mutate({ title, description });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Titulo</FormLabel>
              <Input
                placeholder="Ingrese el Titulo"
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Descripción</FormLabel>
              <Input
                placeholder="Ingrese una Descripción"
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePostModal;
