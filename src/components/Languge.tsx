import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Portal,
    Image,
    Flex,
    SimpleGrid,
  } from "@chakra-ui/react";
  
  const Language = () => {
    const Engflag =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png";
    return (
      <Popover placement="bottom-start">
        <PopoverTrigger>
          <Image src={Engflag} borderRadius="full" boxSize="60px" />
        </PopoverTrigger>
        <Portal>
          <PopoverContent w="150px">
            <PopoverArrow />
            {/* <PopoverHeader>เลือกภาษา</PopoverHeader>
            <PopoverCloseButton /> */}
            <PopoverBody>
              <SimpleGrid columns={1} >
                <Button colorScheme="blue" width="100%" height="30px">Thai</Button>
                <Button colorScheme="red" width="100%" height="30px" marginTop={1}>English</Button>
              </SimpleGrid>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    );
  };
  
  export default Language;
  