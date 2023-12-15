"use client";
import {
  Flex,
  HStack,
  Spacer,
  Center,
  Text,
  Box,
  Avatar,
  Heading,
  Icon,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { TbCoinFilled } from "react-icons/tb";

const NavBar = () => {
  const logo =
    "https://t3.ftcdn.net/jpg/03/82/52/88/360_F_382528893_kscSzE6TPttL5vhWQbyRkvKa58y8pA3P.jpg";
  return (
    <Flex marginTop={1}>
      <ColorModeSwitch />
      <Spacer />
      <HStack justifyContent="space-between">
        <Center>
          <Flex>
            <Box>
              <Heading
                as="h4"
                size="sm"
                bgGradient="linear(to-l, #FE53BB, #08F7FE)"
                bgClip="text"
              >
                Hello TAOXAW
              </Heading>
              <HStack>
                <Icon as={TbCoinFilled} color="yellow.500" />
                <Text fontSize="sm">Credits : 2000</Text>
              </HStack>
            </Box>
          </Flex>
          <Text></Text>
        </Center>
        <Avatar
          name="Ryan Florence"
          src="https://bit.ly/prosper-baba"
          marginRight={3}
        />
      </HStack>
    </Flex>
  );
};

export default NavBar;
