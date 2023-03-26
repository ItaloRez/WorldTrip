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

      <Box
        w="90px"
        h="2px"
        bg="dark.text"
        margin={{
          base: "36px auto 24px",
          lg: "80px auto 52px",
        }}
      />

      <Text
        color="dark.text"
        fontWeight={500}
        fontSize={{ base: "xl", lg: "4xl" }}
        lineHeight={{ base: "30px", lg: "54px" }}
        textAlign="center"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <ContinentSlides />
    </>
  );
}
