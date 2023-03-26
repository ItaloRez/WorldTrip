import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ContinentSlide from "../ContinentSlide";
import { Continent } from "@/pages/continent/[continent]";

interface SlidesProps {
  continent: Continent;
  title: string;
  subtitle: string;
  image: string;
}

const slides: SlidesProps[] = [
  {
    continent: Continent.europe,
    title: "Europa",
    subtitle: "O continente mais antigo.",
    image: "/continents/Europe.png",
  },
  {
    continent: Continent.southAmerica,
    title: "América do Sul",
    subtitle: "O continente mais tropical.",
    image: "/continents/SouthAmerica.jpg",
  },
  {
    continent: Continent.northAmerica,
    title: "América do Norte",
    subtitle: "O continente mais desenvolvido.",
    image: "/continents/NorthAmerica.jpg",
  },
];

export default function ContinentSlides() {
  return (
    <Box
      maxWidth={1240}
      mx="auto"
      mt={{ base: "20px", lg: "52px" }}
      h={{ base: 250, lg: 450 }}
      mb="40px"
    >
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <ContinentSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
