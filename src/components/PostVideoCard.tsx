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
import { FaVideo } from "react-icons/fa";

const PostVideoCard = () => {
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
          <Icon as={FaVideo} w={8} h={8} color="#FE53BB"></Icon>
        </Center>

        <Box>
          <Center>
            <Heading fontSize="2xl">ส่งวิดีโอขึ้นจอ</Heading>
          </Center>
          <Center>
            <Text fontSize="sm">แบ่งปันคลิปดีๆ ให้ทุกคนดู</Text>
          </Center>
        </Box>
      </Box>
    </Link>
  );
};

export default PostVideoCard;
