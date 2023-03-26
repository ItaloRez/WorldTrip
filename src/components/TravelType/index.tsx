import {
  Box,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

interface TravelTypeProps {
  title: string;
  image: string;
}

export default function TravelType({ title, image }: TravelTypeProps) {
  const isLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (!isLg) {
    return (
      <HStack spacing={2}>
        <Box bgColor="highlight.main" w={2} h={2} borderRadius="50%" />

        <Text color="dark.text" fontSize="lg">
          {title}
        </Text>
      </HStack>
    );
  }

  return (
    <Stack justify="space-between" align="center" h={145}>
      <Image src={image} alt="Cocktail" w={85} h={85} />

      <Text color="dark.text" fontSize="xl" lineHeight="30px" fontWeight={500}>
        {title}
      </Text>
    </Stack>
  );
}
