import { Box, Image } from "@chakra-ui/react";

const ImageSlider = () => {
  return (
    <Box margin={3}>
      <Image
        borderRadius="lg"
        w="100%"
        h="220"
        objectFit="cover"
        src="https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt="Dan Abramov"
      />
    </Box>
  );
};

export default ImageSlider;
