import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  IconButton,
  Image,
  Button,
  Center,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike, BiShare, BiChat } from "react-icons/bi";

const FeedCard = () => {
  return (
    <Center>
      <Card maxW="1080px" margin={3}>
        <CardHeader margin={-2}>
          <Flex>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="LETMETAKE" src="https://bit.ly/kent-c-dodds" />

              <Box>
                <Heading size="sm">LETMETAKE</Heading>
                <Text>นักเย่อ, ในป่าและบนภูเขา</Text>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<BsThreeDotsVertical />}
            />
          </Flex>
        </CardHeader>
        <CardBody margin={-3}>
          <Text>เย่อวันละ 3 ครั้งหลังอาหาร </Text>
        </CardBody>
        <Image
          objectFit="cover"
          src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/412104729_932561871561660_8643995401076808754_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeH2gmvAomEpyBDWC0ieyzg08JdPa9ArjNjwl09r0CuM2Mpy6M40aGTmVvUfIF5P2Q0&_nc_ohc=GfzHJtiYUx4AX_fmPlp&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfD5oxaNDnt1YOKhyAIWufQrJQGc5i5ypn-kxofMVNBO4w&oe=6583A2EA"
          alt="Chakra UI"
          h="auto"
          w="100%"
        />

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          margin={-3}
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button
            bgGradient="linear(to-r, #FE53BB, #09FBD3)"
            type="submit"
            width="100%"
          >
            ส่องเฟส/ไอจี
          </Button>
        </CardFooter>
      </Card>
    </Center>
  );
};

export default FeedCard;
