import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";

interface CityCardProps {
  city: string;
  country: string;
  flag: string;
  flagAlt: string;
  image: string;
}

export default function CityCard({
  city,
  country,
  flag,
  image,
  flagAlt,
}: CityCardProps) {
  return (
    <Box bgColor="light.white" borderRadius="4px 4px 0 0" overflow="hidden">
      <Image src={image} alt={city} w="100%" h="170px" />
      <Box
        bgColor="light.white"
        borderRadius="0 0 4px 4px"
        borderColor="highlight.opacity"
        borderWidth="0 1px 1px 1px"
        px="6"
        pt="5"
        pb="6"
      >
        <HStack justify="space-between">
          <Stack spacing="3">
            <Text fontSize="xl" lineHeight="25px">
              {city}
            </Text>
            <Text
              fontWeight={500}
              fontSize="md"
              lineHeight="26px"
              color="dark.info"
            >
              {country}
            </Text>
          </Stack>
          <Image
            src={flag}
            alt={flagAlt}
            w="30px"
            h="30px"
            borderRadius="50%"
          />
        </HStack>
      </Box>
    </Box>
  );
}
