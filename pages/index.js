import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import Post from '../components/Post';
import { connectDB } from '../db/connection';
import { getPosts } from '../db/post_utils';
import { useQuery } from 'react-query';

export default function Home({ posts }) {
  const { data, isError, isLoading } = useQuery(
    'posts',
    () => fetch('http://localhost:3000/api/post').then((data) => data.json()),
    { initialData: { data: posts } }
  );

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg="gray.100" minH="100vh" py={16}>
        <Flex
          as="main"
          justifyContent="flex-start"
          flexDirection="column"
          m="10 auto"
          alignItems="center">
          {data?.data?.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </Flex>
      </Box>
    </>
  );
}

// getStaticProps funciona como un servidor, que colecta de la base de datos realtime los datos. O se puede acceder los datos por fetch al cluster de mongodb.
export async function getStaticProps() {
  // En el build de la aplicacion, Nextjs se encarga de sacar esta función del front-end, con los import.
  const { db } = await connectDB();
  const posts = await getPosts(db);

  return {
    props: {
      posts,
    },
  };
}
