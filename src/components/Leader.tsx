import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import styles from "@/styles/postBox.module.css";

const Leader = () => {
  return (
    <Card
      direction={{ lg: "row", base: "row" }}
      maxHeight={{ base: "150px", lg: "150px" }}
      boxShadow="xl"
      className={styles.block}
    >
      <Image
        objectFit="cover"
        maxW={{ lg: "100%", base: "150px" }}
        maxH={{ lg: "100%", base: "110px" }}
        src="https://media2.giphy.com/media/V34d4LLUtlJSZ12tE9/giphy.gif?cid=ecf05e477ln82kpdi85cjuf4mrexut1rdinumnubmcyvngbl&ep=v1_stickers_search&rid=giphy.gif&ct=s"
        alt="Leader"
      />

      <CardBody>
        <HStack justifyContent="space-between">
          <Box>
            <Heading size="lg">Your Rank</Heading>
          </Box>
          <Button
            size="sm"
            bgGradient="linear(to-r, #09FBD3, #FE53BB)"
            color="white"
          >
            visit
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default Leader;
