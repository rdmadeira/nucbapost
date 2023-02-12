import React from 'react';
import { Button, Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Post = ({ post }) => {
  return (
    <motion.div whileHover={{ scale: 1.02, translateY: '-5px' }}>
      <Box
        w={'300px'}
        borderWidth="1px"
        borderRight={'lg'}
        overflow="hidden"
        bg={'white'}
        mg={5}>
        <Box p="6" display="flex" flexDirection="column">
          <Text as="h1" fontSize="25px" fontWeight="600">
            {post.title}
          </Text>
          <Text>{post.description}</Text>
          <Link href={`posts/${post._id}`}>
            <Button
              bg="#7928CA"
              mt="10"
              color={'white'}
              fontWeight="600"
              _hover={{ bg: '#9e47f5', fontWeight: '700' }}>
              Ver Post
            </Button>
          </Link>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Post;
