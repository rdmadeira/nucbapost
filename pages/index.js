import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import Post from '../components/Post';

export default function Home() {
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
          align="center">
          <Post />
        </Flex>
      </Box>
    </>
  );
}
