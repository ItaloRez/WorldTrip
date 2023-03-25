import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Box position="relative" h={370}>
      <Image
        src="/Background.png"
        w="100%"
        height={335}
        position="absolute"
        top="0"
        left="0"
        zIndex="-1"
      />

      <Flex maxWidth={1240} mx="auto" position="relative">
        <Stack align="flex-start" spacing={5} mt="80px" px="10">
          <Text
            color="light.text"
            fontSize="4xl"
            lineHeight="54px"
            w={426}
            fontWeight={500}
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Text>
          <Text
            color="light.info"
            fontSize="xl"
            lineHeight="30px"
            w={524}
            fontWeight={400}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>

        <Image
          src="/Airplane.svg"
          position="absolute"
          top="80px"
          right="0"
          w={417}
          h={270}
          transform="rotate(3deg)"
        />
      </Flex>
    </Box>
  );
}
