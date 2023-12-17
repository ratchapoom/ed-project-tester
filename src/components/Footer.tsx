"use client";
import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { ImHome3 } from "react-icons/im";
import { SiBuzzfeed } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const Footer = () => {
  return (
    <Flex
      position="fixed"
      left="0"
      bottom={0}
      marginTop={10}
      width="100%"
      height="60px"
      marginBottom={3}
      borderRadius="lg"
      justify="space-around"
      bgGradient="linear(to-l, #FE53BB, #08F7FE)"
    >
      <Center minWidth="120px" h="60px">
        <Link href='/store/feed'>
          <Box>
            <Center>
              <Icon as={SiBuzzfeed} w={7} h={6} />
            </Center>
            <Heading as="h1" fontSize="md">
              Feed
            </Heading>
          </Box>
        </Link>
      </Center>
      <Center minWidth="120px" h="60px">
        <Link href='/'>
          <Box>
            <Center>
              <Icon as={ImHome3} w={7} h={6} />
            </Center>
            <Heading as="h1" fontSize="md">
              Home
            </Heading>
          </Box>
        </Link>
      </Center>
      <Center minWidth="120px" h="60px">
        <Link href='/profile'>
          <Box>
            <Center>
              <Icon as={CgProfile} w={7} h={6} />
            </Center>
            <Heading as="h1" fontSize="md">
              Profile
            </Heading>
          </Box>
        </Link>
      </Center>
    </Flex>
  );
};

export default Footer;
