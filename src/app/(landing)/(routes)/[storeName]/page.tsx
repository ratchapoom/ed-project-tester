"use client";

import NextLink from "next/link";
import {
  Avatar,
  Center,
  Flex,
  HStack,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import Leader from "@/components/Leader";
import PostCard from "@/components/PostCard";
import ImageSlider from "@/components/ImageSlider";
import { BsStars } from "react-icons/bs";
import TipCard from "@/components/TipCard";
import PostVideoCard from "@/components/PostVideoCard";
import PostMsgCard from "@/components/PostMsgCard";

const LandingStorePage = () => {
  return (
    <>
      <SimpleGrid minChildWidth="300px" padding={3}>
        <HStack>
          <Avatar
            size="xl"
            name="Christian Nwamba"
            src="https://bit.ly/code-beast"
          />
          <Text fontSize="xl" marginLeft={5} fontWeight="bold">
            Rattanapol Dmlg
          </Text>
        </HStack>
      </SimpleGrid>
      <SimpleGrid minChildWidth="300px" spacing="20px" padding={3}>
        <Box>
          <Leader />
        </Box>
      </SimpleGrid>
      <SimpleGrid minChildWidth="150px" padding={3} marginTop={-3} spacing={5}>
        <PostCard />
        <PostVideoCard />
        <TipCard />
        <PostMsgCard />
      </SimpleGrid>
      <SimpleGrid minChildWidth="300px" padding={3}>
        <Center fontWeight="bold" fontSize="lg" marginBottom={-3}>
          <Icon as={BsStars} marginRight={1}>
            {" "}
          </Icon>
          Promotion
          <Icon as={BsStars} marginLeft={1}>
            {" "}
          </Icon>
        </Center>
      </SimpleGrid>
      <ImageSlider />
    </>
  );
};

export default LandingStorePage;
