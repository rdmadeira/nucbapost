import { Box, Text, Button } from 'chakra-ui';

const Post = ({ post }) => {
  return (
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
  );
};

// Funcion de nextjs para acceder a los paths, que en el bilding de la app, no existen los paths. Se puede acceder por fetch a mongodb, o sacar de la base de datos db

export async function getStaticPaths() {}

export default Post;
