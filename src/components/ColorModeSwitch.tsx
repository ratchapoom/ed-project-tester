"use client";

import { HStack, Hide, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack marginLeft={3}>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {/* <Hide below="md"> */}
      <Text whiteSpace="nowrap">Color Mode</Text>
      {/* </Hide> */}
    </HStack>
  );
};

export default ColorModeSwitch;
