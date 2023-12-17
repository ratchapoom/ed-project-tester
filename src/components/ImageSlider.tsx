import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { Box, Image } from "@chakra-ui/react";

import { Slide } from "@/app/(landing)/(routes)/[storeName]/page";

interface Props {
  slides: Slide[];
}

const ImageSlider = ({ slides }: Props) => {
  return (
    <Box marginRight={3} marginLeft={3}>
      <Carousel
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
      >
        {slides.map((slide) => {
          return (
            <Image
              src={slide.image}
              height={{ base: "200px", md: "400px" }}
              width="800px"
              objectFit="cover"
              key={slide.image}
              borderRadius="lg"
            />
          );
        })}
      </Carousel>
    </Box>
  );
};

export default ImageSlider;
