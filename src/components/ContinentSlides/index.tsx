import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ContinentSlides() {
  return (
    <Box maxWidth={1240} mx="auto" mt="52px" h={450} mb="40px">
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <SwiperSlide>
          <Stack align="center" justify="center" h="100%">
            <Text
              color="light.text"
              fontWeight={700}
              fontSize="5xl"
              lineHeight="72px"
            >
              Europa
            </Text>
            <Text
              color="light.info"
              fontWeight={700}
              fontSize="2xl"
              lineHeight="36px"
            >
              O continente mais antigo.
            </Text>
          </Stack>
          <Image
            src="/Continent.png"
            alt="Europe"
            w="100%"
            h="100%"
            position="absolute"
            top="0"
            left="0"
            zIndex="-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/Continent.png" alt="Europe" w="100%" h="100%" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
