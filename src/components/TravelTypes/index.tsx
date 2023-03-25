import { HStack } from "@chakra-ui/react";
import TravelTypeIcon from "@/components/TravelType";

export default function TravelTypes() {
  return (
    <HStack maxWidth={1240} mx="auto" justify="space-between" mt="80px" px="10">
      <TravelTypeIcon title="vida noturna" image="/Cocktail.svg" />
      <TravelTypeIcon title="praia" image="/Surf.svg" />
      <TravelTypeIcon title="moderno" image="/Modern.svg" />
      <TravelTypeIcon title="clássico" image="/Museum.svg" />
      <TravelTypeIcon title="e mais..." image="/Earth.svg" />
    </HStack>
  );
}
