"use client";

import { BsStars } from "react-icons/bs";

import { Avatar, Center, HStack, Icon, Text } from "@chakra-ui/react";
import { SimpleGrid, Box } from "@chakra-ui/react";

import Leader from "@/components/Leader";
import PostCard from "@/components/PostCard";
import ImageSlider from "@/components/ImageSlider";
import TipCard from "@/components/TipCard";
import PostVideoCard from "@/components/PostVideoCard";
import PostMsgCard from "@/components/PostMsgCard";

export interface Slide {
  image: string;
}

const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
];

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
      <ImageSlider slides={slides} />
    </>
  );
};

export default LandingStorePage;
