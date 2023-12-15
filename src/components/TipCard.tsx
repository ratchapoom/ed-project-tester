"use client";
import {
  Image,
  Box,
  Flex,
  Center,
  Icon,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { MdAttachMoney } from "react-icons/md";

const TipCard = () => {
  return (
    <Link as={NextLink} href="/store/image-post">
      <Box
        borderWidth="2px"
        borderColor="#8d9ed9"
        borderRadius="lg"
        overflow="hidden"
        bgColor="blackAlpha.800"
        padding={2}
        h="110px"
      >
        <Center>
          <Icon as={MdAttachMoney} w={8} h={8} color="#FE53BB"></Icon>
        </Center>

        <Box>
          <Center>
            <Heading fontSize="2xl">ทิปร้าน</Heading>
          </Center>
          <Center>
            <Text fontSize="sm">เพื่อให้กำลังใจทางร้าน</Text>
          </Center>
        </Box>
      </Box>
    </Link>
  );
};

export default TipCard;
