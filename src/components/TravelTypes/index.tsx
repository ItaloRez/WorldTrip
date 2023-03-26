import { Box, Flex, Grid, HStack, useBreakpointValue } from "@chakra-ui/react";
import TravelTypeIcon from "@/components/TravelType";

export default function TravelTypes() {
  const isLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (isLg) {
    return (
      <HStack
        justify="space-between"
        mt="80px"
        maxWidth={1240}
        mx="auto"
        px="10"
      >
        <TravelTypeIcon
          title="vida noturna"
          image="/travelTypes/Cocktail.svg"
        />
        <TravelTypeIcon title="praia" image="/travelTypes/Surf.svg" />
        <TravelTypeIcon title="moderno" image="/travelTypes/Modern.svg" />
        <TravelTypeIcon title="clássico" image="/travelTypes/Museum.svg" />

        <TravelTypeIcon title="e mais..." image="/travelTypes/Earth.svg" />
      </HStack>
    );
  }

  return (
    <>
      <Grid
        mt="80px"
        maxWidth={1240}
        mx="auto"
        px="10"
        templateColumns={{
          base: "repeat(2, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={4}
      >
        <TravelTypeIcon
          title="vida noturna"
          image="/travelTypes/Cocktail.svg"
        />
        <Flex justify="flex-end">
          <TravelTypeIcon title="praia" image="/travelTypes/Surf.svg" />
        </Flex>
        <TravelTypeIcon title="moderno" image="/travelTypes/Modern.svg" />
        <Flex justify="flex-end">
          <TravelTypeIcon title="clássico" image="/travelTypes/Museum.svg" />
        </Flex>
        <Flex gridColumn={"1 / -1"} justifyContent="center">
          <TravelTypeIcon title="e mais..." image="/travelTypes/Earth.svg" />
        </Flex>
      </Grid>
    </>
  );
}
