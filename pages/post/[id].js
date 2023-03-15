import { Box, Text, Button } from '@chakra-ui/react';

const Post = ({ post }) => {
  return (
    <Box
      bg="gray.100"
      minH="100vh"
      py={16}
      display="flex"
      justifyContent="center">
      <Box
        w="80%"
        display="flex"
        justifyContent="center"
        borderWidth="1px"
        borderRight={'lg'}
        overflow="hidden"
        bg={'white'}
        mg={5}>
        <Box p="6" display="flex" flexDirection="column">
          <Text as="h1" fontSize="25px" fontWeight="600">
            {post?.title}
          </Text>
          <Text as="p">{post?.description}</Text>
        </Box>
      </Box>
    </Box>
  );
};

// Funcion de nextjs para acceder a los paths, que en el bilding de la app, no existen los paths. Se puede acceder por fetch a mongodb, o sacar de la base de datos db

export async function getStaticPaths() {
  const result = await fetch(
    `${process.env.PROTOCOL}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/post`
  ); // por defecto el fetch es GET
  const { data } = await result.json();

  const paths =
    data?.map((post) => ({
      params: {
        id: post._id,
      },
    })) || [];

  return { paths, fallback: true }; // Esta funcion getpaths pide que retorne este objeto, con paths, y el valor de fallback. El fallback true quiere decir que al crear la app (build), el post no existe, crea la página on demand y crea un cache.
}

export async function getStaticProps({ params }) {
  // params es la prop del contexto (context.params)
  const res = await fetch(
    `${process.env.PROTOCOL}${process.env.NEXT_PUBLIC_VERCEL_URL}/${params.id}`
  );
  const { data } = await res.json();

  return {
    props: {
      post: data[0],
    },
  };
}

export default Post;
