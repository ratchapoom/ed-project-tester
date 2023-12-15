"use client";

import { IconType } from "react-icons";
import { Center, HStack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { useState } from "react";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

export interface Platform {
  name: string;
  icon: IconType;
}

const PlatformIconList = ({ onSelectPlatform }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const platformIcons: Platform[] = [
    { name: "instragram", icon: FaInstagram },
    { name: "facebook", icon: FaFacebook },
    { name: "tiktok", icon: FaTiktok },
  ];

  const handleSelectedPlatform = (platform: Platform, index: number) => {
    setSelectedIndex(index);
    onSelectPlatform(platform);
  };

  return (
    <Center>
        <HStack marginTop={2} marginBottom={2}>
      {platformIcons.map((platform, index) => (
        <Icon
          key={platform.name}
          as={platform.icon}
          w={8}
          h={8}
          cursor="pointer"
          _hover={{
            color: "#FE53BB",
          }}
          
          color={selectedIndex === index ? "#FE53BB" : "gray"}
          onClick={() => handleSelectedPlatform(platform, index)}
        />
      ))}
    </HStack>
    </Center>
    
  );
};

export default PlatformIconList;
