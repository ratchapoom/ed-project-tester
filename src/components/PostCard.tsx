"use client";

import {
  Image,
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Icon,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { MdAddAPhoto } from "react-icons/md";

const PostCard = () => {
  return (
    <Link as={NextLink} href="/store/image-post">
      <Box
        maxW="sm"
        borderWidth="2px"
        borderColor="#8d9ed9"
        borderRadius="lg"
        overflow="hidden"
        bgColor="blackAlpha.800"
        padding={2}
        h="110px"
      >
        <Center>
          <Icon as={MdAddAPhoto} w={8} h={8} color="#08F7FE"></Icon>
        </Center>

        <Box>
          <Center>
            <Heading fontSize="2xl">ส่งรูปขึ้นจอ</Heading>
          </Center>
          <Center>
            <Text fontSize="sm">แจกวาร์ปดีๆ ให้ทุกคน</Text>
          </Center>
        </Box>
      </Box>
    </Link>
  );
};

export default PostCard;
