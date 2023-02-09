import React from 'react';
import { Box, Flex, useDisclosure /* , Progress */ } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import CreatePostModal from './CreatePostModal';

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="100%" borderBottom="1px">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        maxW="900px"
        m="auto"
        p={8}>
        <Box
          as="button"
          bg="black"
          color="white"
          width="120px"
          borderRadius="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="50px"
          fontSize="2xl"
          fontWeight="700"
          cursor="pointer">
          NucPost
        </Box>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Box
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            as="button"
            color="white"
            width="100px"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="50px"
            fontSize="md"
            fontWeight="600"
            cursor="pointer"
            onClick={onOpen}>
            Crear Post
          </Box>
        </motion.div>
      </Flex>
      {/* <Progress size="sm" colorScheme="green" isIndeterminate hasStripe /> */}
      <CreatePostModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Nav;
