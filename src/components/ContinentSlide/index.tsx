import { SwiperSlide } from "swiper/react";
import { Image, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface ContinentSlideProps {
  continent: string;
  title: string;
  subtitle: string;
  image: string;
}

export default function ContinentSlide({
  continent,
  title,
  subtitle,
  image,
}: ContinentSlideProps) {
  const router = useRouter();

  const handleGoToContinent = () => {
    router.push(`/continent/${continent}`);
  };

  return (
    <>
      <Stack
        align="center"
        justify="center"
        h="100%"
        _hover={{
          cursor: "pointer",
        }}
        onClick={handleGoToContinent}
      >
        <Text
          color="light.text"
          fontWeight={700}
          fontSize={{ base: "2xl", lg: "5xl" }}
          lineHeight={{ base: "36px", lg: "72px" }}
        >
          {title}
        </Text>
        <Text
          color="light.info"
          fontWeight={700}
          fontSize={{ base: "sm", lg: "2xl" }}
          lineHeight={{ base: "21px", lg: "36px" }}
        >
          {subtitle}
        </Text>
      </Stack>
      <Image
        src={image}
        alt="Europe"
        w="100%"
        h="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex="-1"
        filter={"brightness(0.5)"}
      />
    </>
  );
}
