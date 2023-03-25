import { Image, Stack, Text } from "@chakra-ui/react";

interface TravelTypeProps {
  title: string;
  image: string;
}

export default function TravelType({ title, image }: TravelTypeProps) {
  return (
    <Stack justify="space-between" align="center" h={145}>
      <Image src={image} alt="Cocktail" w={85} h={85} />
      <Text color="dark.text" fontSize="xl" lineHeight="30px" fontWeight={500}>
        {title}
      </Text>
    </Stack>
  );
}
