import { Box, Text } from "@chakra-ui/react";
import ContinentSlides from "@/components/ContinentSlides";
import TravelTypes from "@/components/TravelTypes";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
      <Header />

      <Banner />

      <TravelTypes />

      <Box w="90px" h="2px" bg="dark.text" margin="80px auto 52px" />

      <Text
        color="dark.text"
        fontWeight={500}
        fontSize="4xl"
        lineHeight="54px"
        textAlign="center"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <ContinentSlides />
    </>
  );
}
